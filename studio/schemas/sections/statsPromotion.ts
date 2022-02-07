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
      description: 'A paragraph or so about SBOC and how they reached these statistics.',
      name: 'backstory',
      title: 'Backstory',
      type: 'simplePortableText',
    },
    {
      description:
        'An opportunity to direct the visitor to related content, signups, or donation page.',
      name: 'cta',
      title: 'Call To Action',
      type: 'ctaButton',
      validation: (Rule: any) => Rule.required().error('"Call To Action" is missing.'),
    },
    {
      description:
        'Each content entry will appear as a card with title, description, button, and image.',
      name: 'content',
      of: [
        {
          fields: [
            {
              description: 'Try to use a transparent PNG or SVG image.',
              name: 'icon',
              title: 'Icon',
              type: 'simpleImage',
              validation: (Rule: any) => Rule.required().error('"Icon" is missing.'),
            },
            {
              description:
                "A number for a statistic that will wow a visitor. For example: '$10,631,850'",
              name: 'stat',
              title: 'Stat',
              type: 'string',
              codegen: { required: true },
              validation: (Rule: any) => Rule.required().error('"Icon" is missing.'),
            },
            {
              description: "A brief explanation of the stat. For example: 'Participating Groups'",
              name: 'description',
              title: 'Description',
              type: 'string',
              validation: (Rule: any) => Rule.required().error('"Icon" is missing.'),
            },
          ],
          type: 'object',
        },
      ],
      title: 'Content',
      type: 'array',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Content" is missing.'),
    },
  ],
  name: 'statsPromotion',
  title: 'Promo - Statistics',
  type: 'object',
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }: { title: string }) {
      return {
        title: `Promo Statistics | ${title}`,
      };
    },
  },
};
