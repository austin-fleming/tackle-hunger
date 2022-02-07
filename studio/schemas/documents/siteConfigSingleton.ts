export default {
  __experimental_actions: ['update', 'publish'],
  name: 'siteConfigSingleton',
  title: 'Site Configuration',
  type: 'document',
  fieldsets: [
    {
      name: 'header',
      title: 'Header',
    },
    {
      name: 'general',
      title: 'General',
    },
  ],
  fields: [
    {
      fieldset: 'general',
      name: 'title',
      title: 'Site Title',
      type: 'string',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Site Title" is missing.'),
    },
    {
      description: 'The main site url. Used to create canonical url',
      fieldset: 'general',
      name: 'url',
      title: 'Site URL',
      type: 'url',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Site URL" is missing.'),
    },
    {
      name: 'defaultMeta',
      title: 'Default Meta + SEO',
      type: 'defaultSeo',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Default Meta + SEO" is missing.'),
    },
    {
      description:
        'Assumes image is pre-cropped (no whitespace around logo). Best choice is to use an SVG where the color are set with currentColor.',
      fieldset: 'general',
      name: 'logo',
      title: 'Brand logo',
      type: 'simpleImage',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Brand Logo" is missing.'), // TODO: add deep validation
    },
    {
      description: 'Select pages for the top menu',
      fieldset: 'header',
      name: 'mainNavigation',
      of: [
        {
          fields: [
            {
              name: 'primaryNavigationItem',
              title: 'Primary Navigation Item',
              type: 'ctaButton',
              codegen: {
                required: true,
              },
              validation: (Rule: any) =>
                Rule.required().error('"Primary Navigation Item" is missing.'),
            },
            {
              description: 'Will appear nested below main Link.',
              name: 'secondaryNavigationItems',
              of: [{ title: 'Secondary Navigation Item', type: 'ctaButton' }],
              title: 'Secondary Navigation Items',
              type: 'array',
            },
          ],
          name: 'navGroup',
          title: 'Navigation Group',
          type: 'object',
          preview: {
            select: {
              title: 'primaryNavigationItem.label',
            },
          },
        },
      ],
      title: 'Header Navigation',
      type: 'array',
      // TODO: Add additional validation for over-all char count to catch potential overflows for 5 items.
      codegen: { required: true },
      validation: (Rule: any) => [
        Rule.max(5).warning('Are you sure you want more than 5 items?'),
        Rule.unique().error('You have duplicate menu items'),
        Rule.required()
          .min(1)
          .error('"Header Navigation" is missing. Please add at least (1) item.'),
      ],
    },
    {
      name: 'notificationBanner',
      title: 'Notification Banner',
      type: 'notificationBanner',
      validation: (Rule: any) =>
        Rule.required().error(
          '"Notification Banner" is missing. If you don\'t need it, set "Activate" to off.'
        ),
      codegen: { required: true },
    },
    {
      name: 'defaultFooter',
      title: 'Footer',
      type: 'footer',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Footer" is missing.'),
    },
  ],
};
