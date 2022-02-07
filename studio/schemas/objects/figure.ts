export default {
  name: 'figure',
  title: 'Image',
  type: 'image',
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: 'caption',
      options: {
        isHighlighted: true,
      },
      title: 'Caption',
      type: 'string',
    },
    {
      name: 'isContained',
      title: 'Contain Image',
      type: 'boolean',
    },
    {
      description: 'Important for SEO and accessiblity.',
      name: 'alt',
      options: {
        isHighlighted: true,
      },
      title: 'Alternative text',
      type: 'string',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Alternative Text" is missing for image.'),
    },
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
    },
  },
};
