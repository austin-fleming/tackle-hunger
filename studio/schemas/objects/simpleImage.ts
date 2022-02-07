export default {
  fields: [
    {
      description: 'Important for SEO and accessiblity.',
      name: 'alt',
      options: {
        isHighlighted: true,
      },
      title: 'Alternative text',
      type: 'string',
    },
    {
      name: 'isContained',
      description:
        'If on, the image will not be cropped to fit the card. (Only use if the image has a transparent background such as icons.',
      title: 'Contain Image',
      type: 'boolean',
      initialValue: false,
    },
  ],
  name: 'simpleImage',
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'alt',
    },
  },
  options: {
    hotspot: true,
  },
  title: 'Image',
  type: 'image',
};
