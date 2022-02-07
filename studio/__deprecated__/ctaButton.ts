export default {
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'buttonColor',
      title: 'Button Color',
      type: 'color',
    },
    {
      description: 'Use this to link between pages on the website',
      fieldset: 'link',
      name: 'page',
      title: 'Internal link',
      to: [{ type: 'page' }],
      type: 'reference',
    },
    {
      fieldset: 'link',
      name: 'link',
      title: 'External link',
      type: 'url',
    },
  ],
  fieldsets: [
    {
      name: 'link',
      title: 'Link',
    },
  ],
  name: 'ctaButton',
  preview: {
    prepare({ title, pageTitle = '', slug, link }) {
      const subtitleExtra = slug ? `Slug:/${slug}/` : link ? `External link: ${link}` : 'Not set';
      return {
        subtitle: `${pageTitle} ${subtitleExtra}`,
        title: `${title}`,
      };
    },
    select: {
      link: 'link',
      pageTitle: 'page.title',
      slug: 'page.slug.current',
      title: 'title',
    },
  },
  title: 'Call to action Button',
  type: 'object',
  validation: (Rule) =>
    Rule.custom((fields = {}) => !fields.page || !fields.link || 'Only one link type is allowed'),
};
