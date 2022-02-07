export default {
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'simplePortableText',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure',
    },
    {
      name: 'ctaButton',
      title: 'Call to action Button',
      type: 'ctaButton',
    },
  ],
  name: 'imageSection',
  preview: {
    prepare({ heading, media }) {
      return {
        media,
        subtitle: 'Image section',
        title: `Image: ${heading}`,
      };
    },
    select: {
      heading: 'heading',
      media: 'image',
      subtitle: 'label',
    },
  },
  title: 'Image with text',
  type: 'object',
};
