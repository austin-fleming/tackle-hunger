export default {
  name: 'footer',
  title: 'Footer',
  type: 'object',
  fields: [
    {
      name: 'footerNavigation',
      title: 'Footer navigation items',
      type: 'array',
      of: [{ type: 'ctaButton' }],
      codegen: { required: true },
      validation: (Rule: any) => [
        Rule.max(10).warning('Are you sure you want more than 10 items?'),
        Rule.unique().error('You have duplicate menu items'),
      ],
    },
    {
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [
        {
          name: 'location',
          title: 'Location',
          type: 'object',
          fields: [
            {
              name: 'locationName',
              title: 'Location Name',
              type: 'string',
              description: 'ex. Houston',
            },
            {
              name: 'addressLine1',
              title: 'Address Line 1',
              type: 'string',
              description: 'ex. 6260 Westpark Drive',
            },
            {
              name: 'addressLine2',
              title: 'Address Line 2',
              type: 'string',
              description: 'ex. Suite 260',
            },
            {
              name: 'cityStateZip',
              title: 'City, State Zip',
              type: 'string',
              description: 'ex. Houston, TX 77057',
            },
          ],
        },
      ],
    },
    {
      name: 'socialMediaLinks',
      title: 'Social Media Links',
      type: 'array',
      of: [{ type: 'socialMediaLink' }],
    },
  ],
};
