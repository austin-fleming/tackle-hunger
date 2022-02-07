import { useEffect } from 'react';
import { Layout } from '@components/common';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// eslint-disable-next-line import/no-extraneous-dependencies
import { StylesProvider } from '@material-ui/styles';
import siteGlobalConfig from 'config/siteGlobalConfig.preval';
import { AppProps } from 'next/app';
import NextHead from 'next/head';
import { appTheme } from 'theme';

export const cache = createCache({ key: 'css' });

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  appTheme.isMobile = useMediaQuery(appTheme.breakpoints.down('sm')); // 600px
  appTheme.isTablet = useMediaQuery(appTheme.breakpoints.between('sm', 'md')); // 600px - 960px

  // MUI - removes server-side injected CSS
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={cache}>
      {/* MUI - inject the style tags first in the head (less priority) */}
      <StylesProvider injectFirst>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <Layout siteConfig={siteGlobalConfig.siteConfig}>
            <NextHead>
              <meta charSet='utf-8' />
              <meta
                content='minimum-scale=1, initial-scale=1, width=device-width'
                name='viewport'
              />
            </NextHead>
            <Component {...{ ...pageProps }} />
          </Layout>
        </ThemeProvider>
      </StylesProvider>
    </CacheProvider>
  );
};

export default App;
