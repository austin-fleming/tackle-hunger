export default {
  name: 'socialMediaLink',
  type: 'object',
  title: 'Social Media Link',
  fields: [
    {
      name: 'platformTitle',
      title: 'Platform Title',
      description: 'For example: Facebook',
      type: 'string',
      validation: (Rule: any) => Rule.required().error('"Platform Title" is missing.'),
      codegen: { required: true },
    },
    {
      name: 'linkUrl',
      title: 'Link Url',
      type: 'url',
      validation: (Rule: any) => Rule.required().error('"Link Url" is missing.'),
      codegen: { required: true },
    },
    {
      description:
        'Social media icon graphic. Get these from social media companies brand guidelines pages.',
      name: 'icon',
      title: 'Icon',
      type: 'simpleImage',
      validation: (Rule: any) => Rule.required().error('Social media icon is missing.'),
      codegen: { required: true },
    },
  ],
  preview: {
    select: {
      title: 'platformTitle',
    },
  },
};
