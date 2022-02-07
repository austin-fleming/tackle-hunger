import React from 'react';
import { DonationWidgetScript } from '@components/common';
import createEmotionServer from '@emotion/server/create-instance';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ServerStyleSheets } from '@material-ui/styles';
import { seoConfig } from 'config/seo';
import { DefaultSeo } from 'next-seo';
import GoogleAnalytics from 'next-simple-google-analytics';
import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { cache } from './_app';

const analyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

const { extractCritical } = createEmotionServer(cache);

const MyDocument = () => (
  <Html lang='en' style={{ overflowX: 'hidden' }}>
    <Head>
      {/* SEO */}
      <DefaultSeo {...seoConfig} />
      {/* FAVICONS */}
      <link href='/apple-icon-57x57.png' rel='apple-touch-icon' sizes='57x57' />
      <link href='/apple-icon-60x60.png' rel='apple-touch-icon' sizes='60x60' />
      <link href='/apple-icon-72x72.png' rel='apple-touch-icon' sizes='72x72' />
      <link href='/apple-icon-76x76.png' rel='apple-touch-icon' sizes='76x76' />
      <link href='/apple-icon-114x114.png' rel='apple-touch-icon' sizes='114x114' />
      <link href='/apple-icon-120x120.png' rel='apple-touch-icon' sizes='120x120' />
      <link href='/apple-icon-144x144.png' rel='apple-touch-icon' sizes='144x144' />
      <link href='/apple-icon-152x152.png' rel='apple-touch-icon' sizes='152x152' />
      <link href='/apple-icon-180x180.png' rel='apple-touch-icon' sizes='180x180' />
      <link href='/android-icon-192x192.png' rel='icon' sizes='192x192' type='image/png' />
      <link href='/favicon-32x32.png' rel='icon' sizes='32x32' type='image/png' />
      <link href='/favicon-96x96.png' rel='icon' sizes='96x96' type='image/png' />
      <link href='/favicon-16x16.png' rel='icon' sizes='16x16' type='image/png' />
      <link href='/manifest.json' rel='manifest' />
      <meta content='#9B51E0' name='msapplication-TileColor' />
      <meta content='/ms-icon-144x144.png' name='msapplication-TileImage' />
      <meta content='#9B51E0' name='theme-color' />
      {/* FONTS */}
      <link href='https://fonts.gstatic.com' rel='preconnect' />
      <link
        href='https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css2?family=Red+Hat+Text:ital,wght@0,400;0,500;0,700;0,900;1,400;1,500;1,700;1,900&display=swap'
        rel='stylesheet'
      />
      {/* ANALYTICS (hidden except on prod) */}
      {analyticsId && <GoogleAnalytics id={analyticsId} />}
    </Head>
    <body
      style={{
        boxSizing: 'content-box',
        overflowX: 'hidden',
        overflowY: 'hidden',
        width: '100%',
      }}>
      <Main />
      <DonationWidgetScript />
      <NextScript />
    </body>
  </Html>
);

MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps> => {
  const muiSheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({ enhanceApp: (App) => (props) => muiSheets.collect(<App {...props} />) });
  const initialProps = await Document.getInitialProps(ctx);
  const styles = [...React.Children.toArray(initialProps.styles), muiSheets.getStyleElement()];

  // Don't inline critical css in development because makes debugging in devtools difficult
  if (process.env.NEXT_PUBLIC_INLINE_CSS !== 'false') {
    const criticalStyles = extractCritical(initialProps.html);
    styles.push(
      <style
        key='emotion-style-tag'
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: criticalStyles.css }}
        data-emotion-css={criticalStyles.ids.join(' ')}
      />
    );
  }
  return Object({ ...initialProps, styles });
};

MyDocument.renderDocument = Document.renderDocument;

export default MyDocument;
