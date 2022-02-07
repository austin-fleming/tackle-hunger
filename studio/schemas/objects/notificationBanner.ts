export default {
  name: 'notificationBanner',
  title: 'Notification Banner',
  type: 'object',
  codegen: { required: true },
  validation: (Rule: any) => [
    Rule.custom((fields: any) =>
      fields && fields.isActive && !fields.message
        ? '"Message" must be set if banner is active.'
        : true
    ),
    Rule.custom((fields: any) =>
      fields && fields.isActive && !fields.destinationUrl
        ? 'Consider adding "Destination URL" to make the banner clickable.'
        : true
    ).warning(),
  ],
  description:
    'Notification that appears at the top of pages. Useful for promoting events or pages.',
  fields: [
    {
      description: 'Turn banner on/off.',
      name: 'isActive',
      title: 'Activate',
      type: 'boolean',
    },
    {
      description: 'Where the visitor should be directed when they click on the banner.',
      name: 'destinationUrl',
      title: 'Destination URL',
      type: 'url',
    },
    {
      description: "A brief message that will draw the visitor's attention.",
      name: 'message',
      title: 'Message',
      type: 'text',
    },
    {
      description:
        "An optional bold text at the beginning of the message. 2-3 words to catch visitor's attention. For example: 'Door Prizes'",
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
  ],
};
