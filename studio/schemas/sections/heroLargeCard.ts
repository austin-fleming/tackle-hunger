import { RiLayoutTopFill } from 'react-icons/ri';

export default {
  name: 'heroLargeCard',
  title: 'Hero - Large Card',
  type: 'object',
  fields: [
    {
      name: 'imageGrid',
      title: 'Image Grid',
      type: 'array',
      description:
        'Only use images with transparent or white backgrounds. Images will appear up to 2 wide. If only one image, it will be full-width.',
      of: [
        {
          type: 'simpleImage',
        },
      ],
    },
    {
      name: 'titleBlock',
      title: 'Hero Text',
      type: 'sectionTitle',
      validation: (Rule: any) => Rule.required().warning('"Hero Text" is missing.'),
    },
  ],
  preview: {
    select: {
      title: 'titleBlock.title',
      subtitle: 'titleBlock.subtitle',
    },
    prepare({ title, subtitle }: { subtitle: string; title: string }) {
      return {
        title: `Hero Large Card | ${title}`,
        subtitle,
        media: RiLayoutTopFill,
      };
    },
  },
};
