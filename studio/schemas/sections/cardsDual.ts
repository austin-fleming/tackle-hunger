import { BsLayoutSplit } from 'react-icons/bs';
import { blockContentToPlainText } from 'react-portable-text';

export default {
  name: 'cardsDual',
  title: 'Cards - Dual',
  type: 'object',
  icons: BsLayoutSplit,
  fields: [
    {
      name: 'sectionTitle',
      title: 'Title Block',
      type: 'sectionTitle',
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          title: 'Card',
          name: 'card',
          type: 'object',
          fields: [
            {
              name: 'simpleImage',
              title: 'Card Image',
              type: 'simpleImage',
            },
            {
              name: 'simpleCardText',
              title: 'Card Text',
              type: 'simpleCardText',
            },
          ],
          preview: {
            select: {
              title: 'simpleCardText.title',
              summary: 'simpleCardText.summary',
              media: 'simpleImage',
            },
            prepare({ title, summary, media }: { media: any; summary: any; title: string }) {
              const previewSummary = summary ? blockContentToPlainText(summary) : 'not set';
              const previewTitle = title || previewSummary;

              return {
                media,
                title: previewTitle,
              };
            },
          },
        },
      ],
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Cards" should have at least (1) item.'),
    },
  ],
  preview: {
    select: {
      title: 'sectionTitle.title',
      subtitle: 'sectionTitle.subtitle',
    },
    prepare({ title, subtitle }: { subtitle: string; title: string }) {
      return {
        media: BsLayoutSplit,
        title: `Cards Dual | ${title}`,
        subtitle,
      };
    },
  },
};
