export default {
  name: 'simpleCardText',
  title: 'Simple Card Text',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'simplePortableText',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'summary',
    },
  },
};
