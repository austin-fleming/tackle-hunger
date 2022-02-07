export default {
  fields: [
    {
      description: "Short, simple title such as 'Coming Up'.",
      name: 'title',
      title: 'Title of Section',
      type: 'string',
      validation: (Rule: any) => Rule.required().error('"Title of Section" is missing.'),
    },
    {
      name: 'sponsorGroup',
      title: 'Sponsor Group',
      type: 'reference',
      to: [{ type: 'sponsorGroups' }],
      codegen: { required: true },
      description: 'Will display the first (10) sponsors in the group',
      validation: (Rule: any) => Rule.required().error('"Sponsor Group" is missing.'),
    },
    {
      description: 'Your most prominent Call To Action.',
      name: 'primaryCta',
      title: 'Primary Call To Action',
      type: 'ctaButton',
      validation: (Rule: any) => Rule.required().error('"Primary Call To Action" is missing.'),
    },
    {
      description: 'A less prominent Call to Action. Useful for secondary audiences.',
      name: 'secondaryCta',
      title: 'Secondary Call To Action',
      type: 'ctaButton',
      validation: (Rule: any) => Rule.required().error('"Secondary Call To Action" is missing'),
    },
  ],
  name: 'sponsorsReel',
  title: 'Sponsors Reel',
  type: 'object',
};
