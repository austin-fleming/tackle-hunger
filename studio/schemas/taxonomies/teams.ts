export default {
  name: 'teams',
  title: 'Teams',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Team Title',
      type: 'string',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Team Title" is missing.'),
    },
    {
      name: 'members',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'teamMember' }],
        },
      ],
      codegen: { required: true },
      validation: (Rule: any) =>
        Rule.min(1).error('"Team Members" should have at least one member.'),
    },
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
};
