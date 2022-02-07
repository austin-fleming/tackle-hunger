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
      description:
        'Each content entry will appear as a card with title, description, button, and image.',
      name: 'content',
      of: [{ type: 'contentCard' }],
      title: 'Content',
      type: 'array',
      validation: (Rule: any) => Rule.required().error('"Content" is missing.'),
    },
  ],
  name: 'newsPromotion',
  title: 'Promo - News',
  type: 'object',
};
