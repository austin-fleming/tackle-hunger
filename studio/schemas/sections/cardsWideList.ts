import { CgLayoutList } from 'react-icons/cg';

export default {
  name: 'cardsWideList',
  title: 'Cards - Wide List',
  type: 'object',
  icon: CgLayoutList,
  fields: [
    {
      name: 'textBlock',
      title: 'Header',
      type: 'sectionTitle',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Header" is missing.'),
    },
    {
      name: 'hasBackground',
      title: 'Display Background',
      description: 'If on, a background color will be applied to this section.',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'contentCards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'image',
              type: 'simpleImage',
              validation: (Rule: any) => Rule.required().error('"Image" is missing.'),
              codegen: { required: true },
            },
            {
              name: 'cardText',
              title: 'Card Text',
              type: 'cardText',
              validation: (Rule: any) => Rule.required().error('"Card Text" is missing.'),
              codegen: { required: true },
            },
          ],
          preview: {
            select: {
              media: 'image',
              title: 'cardText.title',
            },
            prepare({ title, media }: { media: any; title: string }) {
              return {
                title,
                media,
              };
            },
          },
        },
      ],
      codegen: { required: true },
      validation: (Rule: any) =>
        Rule.required().min(1).error('"Cards" must have at least one item.'),
    },
  ],
  preview: {
    select: {
      title: 'textBlock.title',
    },
    prepare({ title }: { title: string }) {
      return {
        title: `Cards Wide List | ${title}`,
      };
    },
  },
};
