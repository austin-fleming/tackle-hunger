export default {
  name: 'cardText',
  title: 'Card Text',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().error('"Title" is missing.'),
      codegen: { required: true },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
    },
    {
      name: 'cta',
      title: 'Call to Action',
      type: 'ctaButton',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'summary',
    },
  },
};
