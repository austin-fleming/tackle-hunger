/* eslint-disable import/no-default-export */
import { getSiteConfig } from 'lib/sanity/queries';
import preval from 'next-plugin-preval';

const getConfig = async () => {
  const siteConfig = await getSiteConfig();
  if (!siteConfig) throw new Error('Preval: no site config fetched from Sanity.');

  return { siteConfig };
};

export default preval(getConfig());
