export default {
  name: 'simplePortableText',
  of: [
    {
      marks: {
        annotations: [{ type: 'link' }],
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
      },
      styles: [],
      title: 'Block',
      type: 'block',
    },
  ],
  title: 'Simple Portable Text',
  type: 'array',
};
