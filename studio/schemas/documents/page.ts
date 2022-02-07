import sanityClient from '@sanity/client';
import slugify from 'slugify';

// HACK: TS won't allow importing from sanity.json without throwing a tantrum about semicolons
const client = sanityClient({
  apiVersion: process.env.SANITY_STUDIO_API_VERSION,
  dataset: process.env.SANITY_STUDIO_API_DATASET as string,
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID as string,
  useCdn: process.env.SANITY_STUDIO_USE_CDN === 'true',
});

/**
 * ingesting =>
 *   1. get slug
 *   2. split at '/'
 *   3. pass array from 2 into paths
 *
 * (from https://www.simeongriggs.dev/nextjs-sanity-slug-patterns)
 */
const asyncBuildSlugFromParent = async (doc: any) => {
  if (!doc.title) return undefined;

  const currentSlug = slugify(doc.title).toLowerCase();

  const parentPageId = doc.parentPage?._ref;

  if (!parentPageId) return currentSlug;

  const parentPage = await client.fetch(`*[_type == "page" && _id == "${parentPageId}"][0]{slug}`);

  const parentPageSlug = parentPage?.slug?.current;

  if (parentPageSlug) return `${parentPageSlug}/${currentSlug}`;

  return currentSlug;
};

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      description: 'Internal name for the page',
      name: 'title',
      title: 'Title',
      type: 'string',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Title" is missing.'),
    },
    {
      name: 'pageRedirect',
      title: 'Page Redirect',
      type: 'url',
      description: 'Use if the page should redirect to a specific URL instead of being rendered.',
    },
    {
      description:
        'Route on the website where this page lives, i.e. https://tacklehunger.org/<slug>',
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (doc: any) => asyncBuildSlugFromParent(doc),
        slugify: (input: any) => input,
      },
      codegen: { required: true },
      validation: (Rule: any) => [Rule.required().error('"Slug" is missing.')],
    },
    {
      name: 'parentPage',
      title: 'Parent Page',
      description:
        'If set, this page will be a child of the selected page. For example: /parent-page/this-page.',
      type: 'reference',
      weak: true,
      to: [{ type: 'page' }],
    },
    {
      name: 'content',
      title: 'Page Builder',
      type: 'pageSections',
      codegen: { required: true },
      validation: (Rule: any) =>
        Rule.required().error('"Page Sections" must have at least one section.'),
    },
    {
      name: 'seo',
      title: 'SEO + Social Media',
      type: 'seo',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"SEO + Social Media" is missing items.'),
    },
  ],
  preview: {
    select: {
      media: 'seo.ogImage',
      subtitle: 'slug.current',
      title: 'title',
    },
  },
};
