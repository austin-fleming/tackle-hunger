import { MdLink } from 'react-icons/md';

export default {
  fields: [
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
    },
    {
      description: 'Select the page that this route should point to',
      name: 'page',
      to: [{ type: 'page' }],
      type: 'reference',
    },
    {
      description: 'For search engines. Will be added to /sitemap.xml',
      name: 'includeInSitemap',
      title: 'Include page in sitemap',
      type: 'boolean',
    },
    {
      description: 'Hide this route for search engines',
      name: 'disallowRobots',
      title: 'Disallow in robots.txt',
      type: 'boolean',
    },
  ],
  icon: MdLink,
  name: 'route',
  preview: {
    prepare({ slug, pageTitle }) {
      return {
        subtitle: `Page: ${pageTitle}`,
        title: slug === '/' ? '/' : `/${slug}`,
      };
    },
    select: {
      pageTitle: 'page.title',
      slug: 'slug.current',
    },
  },
  title: 'Route',
  type: 'document',
};
