import React, { Fragment } from 'react';
import { urlFor } from '@config/sanity';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Container } from '@material-ui/core';
import { LogoJsonLd } from 'next-seo';
import Head from 'next/head';
import { SimpleImage, SiteConfig } from 'types/generated/schema';
import { Footer, SiteHeader } from 'components/common';


type LayoutProps = {
  config: SiteConfig;
};

export const Layout = ({
  config,
  children
}: {
  config: SiteConfig,
  children: any
}) => {
  if (!config) {
    console.error('Missing config');
    return <div>Missing config</div>;
  }

  const { logo, url } = config;

  return (
    <Fragment>
      <Head>
        <link href='https://fonts.gstatic.com' rel='preconnect' />
        <link
          href='https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap'
          rel='stylesheet'
        />
        {/* TODO: Trim down font selection */}
        <link
          href='https://fonts.googleapis.com/css2?family=Red+Hat+Text:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap'
          rel='stylesheet'
        />
        <meta content='initial-scale=1.0, width=device-width, viewport-fit=cover' name='viewport' />
      </Head>
      <SiteHeader {...config} />
      <Container
        disableGutters
        maxWidth='lg'
        style={{ maxWidth: '100%', overflowX: 'hidden', width: '100%' }}>
        {/* <Header logo={logo} navItems={mainNavigation} title={title} /> */}

        <main className='content'>{children}</main>
      </Container>
      <Footer key='footer' {...config} />
      {logo && url && <LogoJsonLd logo={urlFor(logo.asset)} url={url} />}
    </Fragment>
  );
};
