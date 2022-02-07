import { Fragment } from 'react';
import { Footer, Navbar } from '@components/common';
import { urlFor } from '@config/sanity';
import { SiteConfigSingleton as SiteConfigSingletonProps } from 'lib/sanity/types';
import { LogoJsonLd } from 'next-seo';
import { StyledMain } from './Layout.styles';

export const Layout = ({
  siteConfig,
  children,
}: {
  children: any;
  siteConfig: SiteConfigSingletonProps;
}) => {
  const { logo, url } = siteConfig;

  return (
    <Fragment>
      <Navbar {...siteConfig} />

      <StyledMain>{children}</StyledMain>

      <Footer {...siteConfig} />

      {logo && url && <LogoJsonLd logo={urlFor(logo.asset)} url={url} />}
    </Fragment>
  );
};
