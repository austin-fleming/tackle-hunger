export default {
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'portableText',
    },
  ],
  name: 'textSection',
  preview: {
    prepare({ heading }) {
      return {
        subtitle: 'Text section',
        title: `${heading}`,
      };
    },
    select: {
      heading: 'heading',
    },
  },
  title: 'Text',
  type: 'object',
};
