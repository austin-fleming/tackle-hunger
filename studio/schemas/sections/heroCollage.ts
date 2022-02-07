export default {
  fields: [
    {
      description:
        'Explain what you do in a brief, punchy statement. This is your 2 second sales pitch.',
      name: 'heroStatement',
      title: 'Hero Statement',
      type: 'string',
      validation: (Rule: any) => Rule.required().error('"Hero Statement" is missing.'),
    },
    {
      description:
        'Smaller text below the hero statement. Explain in 2-3 concise sentences how you do what you claimed in the "Hero Statement".',
      name: 'valueStatement',
      title: 'Value Statement',
      type: 'string',
      validation: (Rule: any) =>
        Rule.required().warning(
          '"Value Statement" is missing. Are you sure you don\'t want to add one?'
        ),
    },
    {
      description:
        'Your most prominent Call To Action. If you could direct someone to only one page, what would it be?',
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
      validation: (Rule: any) => Rule.required().error('"Secondary Call To Action" is missing.'),
    },
    {
      description:
        'Add at least 6 images to build out the collage gallery. They will appear on the site in the order they are listed, starting at the top.',
      name: 'imageGallery',
      of: [{ type: 'simpleImage' }],
      title: 'Image Gallery',
      type: 'array',
    },
    {
      description: 'You can list up to three notable sponsors that will appear below the CTA.',
      fields: [
        {
          description:
            "A brief description of what this section is about. For example: 'Our Newest Sponsors'",
          name: 'title',
          title: 'Section Title',
          type: 'string',
          validation: (Rule: any) =>
            Rule.required().warning(
              'Sponsor\'s "Section Title" is missing. Are you sure you don\'t want to add one?'
            ),
        },
        {
          description:
            'Logos should be crisp and have transparent backgrounds (therefore, the extension will be png or svg). Remember that these will appear over a textured background, so it will be noticeable if they have a white background.',
          name: 'sponsorLogos',
          of: [{ type: 'simpleImage' }],
          title: 'Sponsor Logos',
          type: 'array',
          validation: (Rule: any) =>
            Rule.required().warning(
              '"Sponsor Logos" is missing. Are you sure don\'t want to add any?'
            ),
        },
      ],
      name: 'sponsors',
      title: 'Sponsors',
      type: 'object',
    },
  ],
  name: 'heroCollage',
  title: 'Hero with Collage',
  type: 'object',
};
