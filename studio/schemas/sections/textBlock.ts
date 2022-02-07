export default {
  name: 'textBlock',
  title: 'Text Block',
  type: 'object',
  fields: [
    {
      name: 'body',
      title: 'Body',
      type: 'simplePortableText',
      validation: (Rule: any) => Rule.required().error('"Body" is missing'),
    },
  ],
};
