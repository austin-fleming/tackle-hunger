export default {
  name: 'sectionTitle',
  title: 'Section Title',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Title" is missing.'),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'simplePortableText',
    },
    {
      name: 'isCentered',
      title: 'Center Content',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'ctaList',
      title: 'CTAs',
      type: 'array',
      of: [{ type: 'ctaButton' }],
    },
  ],
};
