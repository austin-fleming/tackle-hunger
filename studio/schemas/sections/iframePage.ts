export default {
  name: 'iframePage',
  title: 'iFrame - External Page',
  type: 'object',
  fields: [
    {
      name: 'src',
      title: 'Source',
      type: 'string',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Source" is missing'),
    },
  ],
};
