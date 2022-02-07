/* eslint-disable import/no-extraneous-dependencies */
import sanityClient from '@sanity/client';
import { config, previewConfig } from 'config/sanity';

export const getClient = (preview = false) => {
  const clientConfig = preview ? { ...previewConfig, previewMode: true } : config;

  return sanityClient(clientConfig);
};
