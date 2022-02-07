/*
 * Envs can be updated and added by adding a new field to the `envs` object, see: https://www.npmjs.com/package/env-cmd#-advanced-usage
 * `defaults` is added to all environments by the withLocalAndDefaults function.
 * A `./.env.local.js` file can be used to overwrite locally and is git-ignored.
 *
 * Example .env.local.js file:
 *
 *   module.exports = {
 *     // important! put your own gmaps api key here:
 *     NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: 'AIzaSyCQiQzGmnoVhH56M_IcJZJX8DbmZUNbZco',
 *     // add or override others like so:
 *     // NEXT_PUBLIC_ALGOLIA_INDEX: 'TKH-all-sites_maxastuart',
 *     // give it a name:
 *     NEXT_PUBLIC_ENV_NAME: 'local',
 *   }
 */

let local = {};
try {
  local = require('./.env.local.js');
} catch (err) {
  console.log('No local env file found, continuing without it...');
}

const SANITY_STUDIO_API_DATASET = 'dev';
const SANITY_STUDIO_API_PROJECT_ID = 'ozqarahg';
const SANITY_STUDIO_API_VERSION = '2021-04-29';
const SANITY_STUDIO_USE_CDN = false;

const defaults = {
  NEXT_PUBLIC_ENV_NAME: 'default (you should not see this)',
  NEXT_PUBLIC_SANITY_STUDIO_API_DATASET: SANITY_STUDIO_API_DATASET,
  NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID: SANITY_STUDIO_API_PROJECT_ID,
  NEXT_PUBLIC_SANITY_STUDIO_API_VERSION: SANITY_STUDIO_API_VERSION,
  NEXT_PUBLIC_SANITY_STUDIO_USE_CDN: SANITY_STUDIO_USE_CDN,
  NEXT_PUBLIC_SENTRY_DSN:
    'https://5cc38821a8904b99b332debb5581ee1d@o438819.ingest.sentry.io/5462763',
  NEXT_PUBLIC_SIB_NEWSLETTER_SUBSCRIBE_URL:
    'https://f5efc8ed.sibforms.com/serve/MUIEAK9nTfAbAKOMHWTWJxS5pfHIRo0qyo_tmX_xjhYcRRHIv_ArpdsHIOB1rJrVHe0zkTuKyaYCcTAmYjZtLujQEiphMVl4qukmCWwc-Nij5q6W1JGqGNpUymBouo48pPlaCce6fcJj6RZjY5zBTnC8HQX5xll2gCc2-b1QSynGgP41gsR1lUmlMUHq2wMSKQyQJM249e_r9WQn?isAjax=1',
  NODE_ENV: 'production',
  SANITY_STUDIO_API_DATASET,
  SANITY_STUDIO_API_PROJECT_ID,
  SANITY_STUDIO_API_VERSION,
  SANITY_STUDIO_USE_CDN,
};

const withLocalAndDefaults = (env) => ({ ...defaults, ...env, ...local });

const envs = {
  dev: withLocalAndDefaults({
    NEXT_PUBLIC_ENV_NAME: 'dev',
    NEXT_PUBLIC_INLINE_CSS: false,
    NODE_ENV: 'development',
  }),
  staging: withLocalAndDefaults({
    NEXT_PUBLIC_ENV_NAME: 'staging',
    NEXT_PUBLIC_SANITY_STUDIO_API_DATASET: 'staging',
    SANITY_STUDIO_API_DATASET: 'staging',
  }),
  prod: withLocalAndDefaults({
    NEXT_PUBLIC_ENV_NAME: 'prod',
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: 'UA-10609782-1',
    NEXT_PUBLIC_SANITY_STUDIO_API_DATASET: 'prod',
    SANITY_STUDIO_API_DATASET: 'prod',
  }),
};

module.exports = envs;
