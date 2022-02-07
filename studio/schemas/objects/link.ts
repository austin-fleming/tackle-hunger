export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'urlLink',
      title: 'URL Link',
      description: 'Link to an URL. For example: https://example.com',
      type: 'urlLink',
    },
    {
      name: 'internalLink',
      title: 'Internal Link',
      description: 'Link to another page on the site.',
      type: 'internalLink',
    },
    {
      name: 'download',
      title: 'download link',
      description: 'Will allow the user to download a document.',
      type: 'file',
    },
    {
      name: 'donationWidget',
      title: 'Donation Widget',
      type: 'boolean',
      description: 'If activated, button will open the donation widget.',
    },
  ],
  validation: (Rule: any) =>
    Rule.custom((fields: any) => {
      const allFields = [
        fields?.donationWidget,
        fields?.urlLink,
        fields?.internalLink,
        fields?.download,
      ];
      const usedFields = allFields.filter((field) => !!field);

      if (usedFields.length > 1) {
        return `Only (1) field should be used. Fields used: ${JSON.stringify(
          usedFields,
          null,
          ' '
        )}`;
      }

      if (usedFields.length === 0) {
        return 'Please use (1) field.';
      }

      return true;
    }),
};
