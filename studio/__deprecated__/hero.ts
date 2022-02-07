export default {
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'simplePortableText',
    },
    {
      name: 'backgroundImage',
      options: {
        hotspot: true,
      },
      title: 'Background image',
      type: 'image',
    },
    {
      name: 'ctaButtons',
      of: [
        {
          title: 'Call to action Button',
          type: 'ctaButton',
        },
      ],
      title: 'Call to action Buttons',
      type: 'array',
    },
  ],
  name: 'hero',
  preview: {
    prepare({ title, media }) {
      return {
        media,
        subtitle: 'Hero section',
        title,
      };
    },
    select: {
      media: 'backgroundImage',
      title: 'heading',
    },
  },
  title: 'Hero',
  type: 'object',
};
