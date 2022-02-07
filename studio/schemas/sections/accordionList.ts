import { FaListUl } from 'react-icons/fa';

export default {
  name: 'accordionList',
  title: 'Accordion List',
  type: 'object',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Header',
      type: 'sectionTitle',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Header" is missing.'),
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'accordionItem' }],
      codegen: { required: true },
      validation: (Rule: any) =>
        Rule.required().min(1).error('"Items" should have at least (1) item.'),
    },
  ],
  preview: {
    select: {
      title: 'sectionTitle.title',
      subtitle: 'sectionTitle.subtitle',
    },
    prepare({ title, subtitle }: { subtitle: string; title: string }) {
      return {
        media: FaListUl,
        title: `Accordion List | ${title}`,
        subtitle,
      };
    },
  },
};
