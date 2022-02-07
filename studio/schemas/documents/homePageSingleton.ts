export default {
  name: 'homePageSingleton',
  title: 'Home Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'content',
      title: 'Page sections',
      type: 'pageSections',
      codegen: { required: true },
      validation: (Rule: any) =>
        Rule.required().error('"Page Sections" must have at least one section.'),
    },
    {
      name: 'seo',
      title: 'SEO + Social Media',
      type: 'seo',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"SEO + Social Media" is missing items.'),
    },
  ],
  preview: {
    prepare: ({ media, slug, title }: { media: any; slug: string; title: string }) => ({
      media,
      subtitle: slug === '/' ? '/' : `/${slug}`,
      title,
    }),
    select: {
      media: 'seo.image',
      slug: 'slug.current',
      title: 'title',
    },
  },
};
