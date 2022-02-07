export default {
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Portrait',
      type: 'simpleImage',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Portrait" is missing.'),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Name" is missing.'),
    },
    {
      name: 'role',
      title: 'Role',
      description: 'What this member does, their position, or other emphasized information.',
      type: 'string',
    },
    // TODO: validate length
    // TODO: limit lines displayed
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
  ],
  preview: {
    select: {
      media: 'image',
      title: 'name',
      subtitle: 'role',
    },
  },
};
