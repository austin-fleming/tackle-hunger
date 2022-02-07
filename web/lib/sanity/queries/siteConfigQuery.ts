import groq from 'groq';
import { getClient } from '../client';
import type { SiteConfigSingleton as SiteConfigSingletonProps } from '../types';

const expandedConfigQuery = groq`
*[_type == "siteConfigSingleton"][0]{
  ...,
  'mainNavigation': mainNavigation[]{
    ...,
    primaryNavigationItem {
      ...,
      link {
        ...,
        "download": download.asset->{url},
        internalLink->{slug}
      }
    },
    'secondaryNavigationItems': secondaryNavigationItems[]{
      ...,
      link {
        ...,
        "download": download.asset->{url},
        internalLink->{slug}
      }
    }
  },
  defaultFooter{
    ...,
    'footerNavigation': footerNavigation[]{
      ...,
      link {
        ...,
        "download": download.asset->{url},
        internalLink->{slug}
      }
    }
  }
}
`;

export const getSiteConfig = async (preview = false): Promise<SiteConfigSingletonProps> =>
  await getClient(preview).fetch<SiteConfigSingletonProps>(expandedConfigQuery);
