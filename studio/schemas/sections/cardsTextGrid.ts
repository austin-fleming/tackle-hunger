import { BsFillGrid3X3GapFill } from 'react-icons/bs';

export default {
  name: 'cardsTextGrid',
  title: 'Cards - Text Card Grid',
  type: 'object',
  icon: BsFillGrid3X3GapFill,
  fields: [
    {
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'sectionTitle',
      validation: (Rule: any) => Rule.required().error('"Section Title" is missing.'),
      codegen: { required: true },
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'cardText' }],
      validation: (Rule: any) =>
        Rule.required().min(1).error('"Cards" should have at least (1) item.'),
      codegen: { required: true },
    },
  ],
  preview: {
    select: {
      title: 'sectionTitle.title',
    },
    prepare({ title }: { title: string }) {
      return {
        title: `Text Card Grid | ${title}`,
        media: BsFillGrid3X3GapFill,
      };
    },
  },
};
