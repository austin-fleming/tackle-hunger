export default {
  name: 'sponsorGroups',
  title: 'Sponsor Groups',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Sponsor Group Title',
      type: 'string',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Sponsor Group Title" is missing.'),
    },
    {
      name: 'sponsors',
      title: 'Sponsor',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'sponsor' }] }],
      codegen: { required: true },
      validation: (Rule: any) =>
        Rule.required().min(1).error('"Sponsors" must have at least one item.'),
    },
  ],
};
