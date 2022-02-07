export default {
  name: 'infoText',
  title: 'Info Text',
  type: 'object',
  fields: [
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'subHeadline',
      title: 'subHeadline',
      type: 'string',
    },
    // make 'card text'. has links, bullets, bold, italic
    {
      name: 'body',
      title: 'body',
      type: 'simplePortableText',
    },
    {
      name: 'ctaList',
      title: 'Calls to Action',
      type: 'array',
      of: [{ type: 'ctaButton' }],
    },
  ],
};
