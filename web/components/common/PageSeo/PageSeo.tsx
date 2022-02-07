import { seoConfig } from '@config/seo';
import { NextSeo } from 'next-seo';
import type { Seo as SeoProps } from 'types/generated/schema';

export const PageSeo = ({ seo, pageSlug }: { pageSlug: string; seo: SeoProps }) => {
  const { metaTitle, metaDescription, disallowRobots } = seo;

  const canonicalUrl = seoConfig.canonical + pageSlug;

  const baseConfig = {
    ...(metaTitle && { title: metaTitle }),
    ...(metaDescription && { description: metaDescription }),
  };

  const ogConfig = {
    ...baseConfig,
    ...(canonicalUrl && { url: canonicalUrl }),
  };

  const metaConfig = {
    ...baseConfig,
    ...(canonicalUrl && { canonical: canonicalUrl }),
    ...(disallowRobots && { noindex: false }),
  };

  return <NextSeo {...metaConfig} openGraph={ogConfig} />;
};
