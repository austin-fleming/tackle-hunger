export default {
  name: 'contentCard',
  title: 'Content Card',
  type: 'object',
  fields: [
    {
      description: 'Brief, one sentence explanation of what the content is about.',
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().warning('"Title" is missing.'),
    },
    {
      description: '1-2 sentence summary of the content.',
      name: 'summary',
      title: 'Summary',
      type: 'text',
      validation: (Rule: any) => Rule.required().warning('"Summary" is missing.'),
    },
    {
      description: 'A prompt to visit the content.',
      name: 'linkButton',
      title: 'Link Button',
      type: 'ctaButton',
      validation: (Rule: any) => Rule.required().warning('"Link Button" is missing.'),
    },
    // TODO: validate?
    {
      description: 'An image illustrating the subject of the content.',
      name: 'cardImage',
      title: 'Card Image',
      type: 'simpleImage',
      validation: (Rule: any) => Rule.required().warning('"Card Image" is missing.'),
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'titleBlock.subtitle',
      media: 'cardImage',
    },
  },
};
