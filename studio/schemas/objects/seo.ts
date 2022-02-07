export default {
  name: 'seo',
  title: 'SEO + Social Media',
  type: 'object',
  fields: [
    {
      title: 'Meta Title',
      name: 'metaTitle',
      type: 'string',
      description: 'Title used for search engines and browsers. Less than (50) characters.',
      codegen: { required: true },
      validation: (Rule: any) => [
        Rule.required().error('"Meta Title" is missing.'),
        Rule.max(50).warning(
          'Titles longer than (50) characters may be truncated by search engines.'
        ),
      ],
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      description:
        'A description of this page. Appears in search engine results and when shared on social media',
      type: 'text',
      codegen: { required: true },
      validation: (Rule: any) => [
        Rule.required().error('"Meta Description" is missing.'),
        Rule.min(50)
          .max(150)
          .warning(
            'Should be between (50) and (150) characters. Longer descriptions may be truncated.'
          ),
      ],
    },
    {
      name: 'ogImage',
      title: 'Social Media Image',
      description:
        'Appears when shared on social media. Facebook recommends 1200x630 (will be auto resized). Will also be cropped to a square on some platforms.',
      type: 'simpleImage',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Social Media Image" is missing.'),
    },
    {
      name: 'excludeFromSitemap',
      title: 'Exclude Page from Sitemap',
      description: 'For search engines. Will hide page from /sitemap.xml',
      type: 'boolean',
      initialValue: false,
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Exclude Page from Sitemap" is not set.'),
    },
    {
      name: 'disallowRobots',
      title: 'Disallow in robots.txt',
      description: 'Hide This Page from Search Engines',
      type: 'boolean',
      initialValue: false,
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Disallow in robots.txt" is not set.'),
    },
  ],
};
