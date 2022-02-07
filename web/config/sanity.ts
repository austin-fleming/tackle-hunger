/* eslint-disable import/no-extraneous-dependencies */
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import {
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from 'next-sanity';
import type { ClientConfig } from 'next-sanity';
import fetch from 'node-fetch';
import { createClient } from 'sanity-codegen';
import { Documents } from '../types/generated/schema';

export const sanityBaseConfig = {
  apiVersion: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_VERSION,
  dataset: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_DATASET as string,
  projectId: process.env.NEXT_PUBLIC_SANITY_STUDIO_API_PROJECT_ID as string,
  useCdn: process.env.NEXT_PUBLIC_SANITY_STUDIO_USE_CDN === 'true',
};

if (!sanityBaseConfig.projectId)
  throw Error('The Project ID is not set. Check your environment variables.');

if (!sanityBaseConfig.dataset)
  throw Error('The dataset name is not set. Check your environment variables.');

if (!sanityBaseConfig.apiVersion)
  throw Error('The API Version is not set. Check your environment variables.');

/**
 * Helper function for generating Image URLs with only the asset reference data (https://www.sanity.io/docs/image-url)
 */
export const urlFor = (source: SanityImageSource): string =>
  createImageUrlBuilder(sanityBaseConfig).image(source)?.url() || '';

type ImageSpecs = {
  height?: number;
  source: SanityImageSource;
  width?: number;
};

// TODO: remove or implement image resize infra
export const urlForSized = (source: SanityImageSource, width?: number, height?: number) =>
  width && height
    ? createImageUrlBuilder(sanityBaseConfig).image(source)?.width(width)?.height(height)?.url() ||
      ''
    : width && !height
    ? createImageUrlBuilder(sanityBaseConfig).image(source)?.width(width)?.url() || ''
    : !width && height
    ? createImageUrlBuilder(sanityBaseConfig).image(source)?.height(height)?.url() || ''
    : createImageUrlBuilder(sanityBaseConfig).image(source)?.url() || '';

/**
 * Set up the live preview subscription hook
 */
export const usePreviewSubscription = createPreviewSubscriptionHook(sanityBaseConfig);

/**
 * Component for Portable Text - takes Serializers passed to @sanity/block-content-to-react (https://github.com/sanity-io/block-content-to-react)
 */
export const PortableText = createPortableTextComponent({ ...sanityBaseConfig, serializers: {} });

/**
 * Client for fetching data in the getStaticProps page functions
 */
export const sanity = createClient<Documents>({ ...sanityBaseConfig, fetch: fetch as any });

/*
///////////////////////////////////////
Keep Below
///////////////////////////////////////
*/
export const config: ClientConfig = Object.freeze({
  ...sanityBaseConfig,
});

export const previewConfig: ClientConfig = Object.freeze({
  ...config,
  token: '',
  useCdn: false,
  withCredentials: true,
});
