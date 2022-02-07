export default {
  name: 'defaultSeo',
  title: 'Default SEO + Social Media',
  type: 'object',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      title: 'Site Title',
      name: 'siteTitle',
      type: 'string',
      description: 'The name of the site.',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Title" is missing.'),
    },
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
      title: 'Meta Description',
      name: 'metaDescription',
      type: 'text',
      rows: 3,
      description: 'Description for search engines. Less than (150) characters.',
      codegen: { required: true },
      validation: (Rule: any) => [
        Rule.required().error('"Meta Description" is missing.'),
        Rule.max(150).warning(
          'Descriptions longer than (150) characters may be truncated by search engines.'
        ),
      ],
    },
    {
      title: 'Social Media Image',
      name: 'ogImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image will be cropped to both (1200x630) and (800x800).',
      codegen: { required: true },
      validation: (Rule: any) => [Rule.required().error('"Social Media Image" is missing.')],
    },
  ],
};
