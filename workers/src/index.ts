import { getAssetFromKV, Options } from '@cloudflare/kv-asset-handler';
import { Octokit } from '@octokit/rest';
import Toucan from 'toucan-js';

/**
 * parameters: {
 *   owner: string;
 *   repo: string;
 *   workflow_id: string | number;
 * } & {
 *  actor?: string | undefined;
 *  branch?: string | undefined;
 *  event?: string | undefined;
 *  status?: "completed" | "action_required" | ... 11 more ... | undefined;
 *  per_page?: number | undefined;
 *  page?: number | undefined;
 * }
 */
const {
  rest: {
    actions: { createWorkflowDispatch, listWorkflowRuns },
  },
} = new Octokit({ auth: GITHUB_ACTION_TOKEN });

const ghConfig = {
  owner: 'TackleHunger', // Organization
  repo: 'sanity-marketing-tacklehunger.org',
  workflow_id: `deploy-web-${ENV_NAME === 'devworker' ? 'dev' : ENV_NAME}.yml`, // GHA workflow filename
};

/**
 * This is a Cloudflare Worker running in V8 clusters on their edge network.
 *
 * addEventListener() is CF's defacto first function that wraps handleEvent() so
 *   everything else can run asynchronously.
 *
 * The DEBUG flag (set in wrangler.toml) will do two things to aid development:
 * 1. we will skip caching on the edge, which makes it easier to debug.
 * 2. we will return an error message on exception in your Response rather
 *    than the default 404.html page.
 */
addEventListener('fetch', (event) => {
  const sentry = new Toucan({
    allowedHeaders: ['user-agent'],
    allowedSearchParams: /(.*)/,
    debug: DEBUG === 'true',
    dsn: 'https://4ebb21969a43444d835474cd98a53492@o438819.ingest.sentry.io/5712876',
    environment: ENV_NAME,
    event,
  });

  try {
    event.respondWith(handleFetchEvent(event, sentry));
  } catch (e) {
    sentry.captureException(e);
    event.respondWith(
      new Response(DEBUG === 'true' ? e.message || e.toString() : 'Internal Error', { status: 500 })
    );
  }
});

/**
 * TackleHunger's custom logic for this CDN to:
 *  - Serve static assets (i.e. website html,js,css,images files)
 *  - Handle API endpoints on the worker (CF's Edge Network)
 *  - Store & serve data & images direct from CF's 'Key Value' Store (KV) (essentially NoSQL tables)
 */
const handleFetchEvent = async (event: FetchEvent, sentry: Toucan) => {
  const { method, url } = event.request;
  const { origin, pathname } = new URL(url);

  if (pathname.match(/^\/media\/.+$/)) {
    return fetch(origin + pathname);
  }

  /**
   * Handles our custom rebuild & deploy tool in Sanity Studio, only on the studio worker
   *   (the GITHUB_ACTION_TOKEN secret is only configured there)
   */
  if (GITHUB_ACTION_TOKEN && pathname === '/api/github-action-deploy') {
    switch (method) {
      case 'POST':
        return new Response(
          JSON.stringify(await createWorkflowDispatch({ ...ghConfig, ref: 'prod' }))
        );
      case 'GET':
        return new Response(
          JSON.stringify(await listWorkflowRuns({ ...ghConfig, branch: 'prod', per_page: 10 }))
        );
      default:
        return new Response('Method not allowed', { status: 405 });
    }
  }

  const options: Partial<Options> = {};

  /**
   * If the route's path has no filetype ending then serve 'that page'.html
   */
  if (pathname.length > 1 && !pathname.match(/\.[a-zA-Z]{2,5}$/g)) {
    /**
     * Serves static preview scene (static page which uses dynamic slugs to pull fresh content)
     */
    const assetPath = url.split('?')[0].replace(/\/preview\/.+$/, '/preview/[slug]');

    options.mapRequestToAsset = (req) => new Request(`${assetPath}.html`, req);
  }

  /**
   * The remainder here is Cloudflare's default workers-site handler logic -
   *   handles the root condition and any other files Next or Sanity webpacked into the bundle
   */
  try {
    if (DEBUG === 'true') options.cacheControl = { bypassCache: true };

    return await getAssetFromKV(event, options);
  } catch (error) {
    sentry.captureException(error);
    // if an error is thrown try to serve the asset at 404.html
    if (DEBUG === 'false') {
      try {
        const notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: (req) => new Request(`${new URL(req.url).origin}/404.html`, req),
        });

        return new Response(notFoundResponse.body, { ...notFoundResponse, status: 404 });
      } catch (err) {
        sentry.captureException(err);
      }
    }

    throw error;
  }
};
