export default {
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Sponsor Name',
      type: 'string',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Sponsor Name" is missing.'),
    },
    {
      name: 'image',
      title: 'Sponsor Logo',
      type: 'simpleImage',
      description:
        'Whenever possible, images should have a transparent background and take up the entire image (no space around logo). SVGs when possible, transparent PNGs are OK.',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Sponsor Logo" is missing.'),
    },
  ],
  preview: {
    select: {
      media: 'image',
      title: 'title',
    },
  },
};
