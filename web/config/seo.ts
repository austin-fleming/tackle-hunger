const url = 'https://tacklehunger.org/';

const title = 'Tackle Hunger - Home of the Souper Bowl of Caring';

const description = 'Uniting ALL communities to tackle hunger.';

export const seoConfig = Object.freeze({
  canonical: url,
  defaultTitle: title,
  description,
  openGraph: {
    description,
    images: [
      {
        alt: '',
        height: 630,
        url: '',
        width: 1200,
      },
      {
        alt: '',
        height: 800,
        url: '',
        width: 800,
      },
    ],
    locale: 'en_US',
    site_name: title,
    title,
    type: 'website',
    url,
  },
  titleTemplate: `%s | ${title}`,
  twitter: {
    cardType: 'summary_large_image',
    handle: '@souperbowl',
    site: '@souperbowl',
  },
});
