export default {
  fields: [
    {
      description: "Short, simple title such as 'Our Map'.",
      name: 'title',
      title: 'Title of Section',
      type: 'string',
      validation: (Rule: any) => Rule.required().error('"Title of Section" is missing.'),
    },
    {
      description:
        '1-2 sentences explaining what the map is. Appears between the title and the CTA.',
      name: 'mapDescription',
      title: 'Map Description',
      type: 'string',
      validation: (Rule: any) => Rule.required().error('"Map Description" is missing.'),
    },
    {
      description:
        'Your most prominent Call To Action. If you could direct someone to only one page, what would it be?',
      name: 'cta',
      title: 'Call To Action',
      type: 'ctaButton',
      validation: (Rule: any) => Rule.required().error('"Call To Action" is missing.'),
    },
    {
      description:
        "Short prompts that appear below the button. For example: 'Having trouble? Click here.'.",
      name: 'ctaSubtext',
      title: 'Call To Action Subtext',
      type: 'simplePortableText',
    },
    {
      description:
        'A faint background image the covers a portion of the advertisement. "Foreground Image" will set on top.',
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'simpleImage',
    },
    {
      description:
        'Sits on top of the "background image". Make sure the image has a transparent background.',
      name: 'foregroundImage',
      title: 'Foreground Image',
      type: 'simpleImage',
      validation: (Rule: any) => Rule.required().error('"Foreground Image" is missing.'),
    },
  ],
  name: 'mapPromotion',
  title: 'Promo - Map',
  type: 'object',
};
