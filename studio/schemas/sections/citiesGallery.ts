import { FaCity } from 'react-icons/fa';

export default {
  name: 'citiesGallery',
  title: 'Cities - Gallery',
  type: 'object',
  fields: [
    {
      name: 'cities',
      title: 'Cities',
      type: 'array',
      codegen: { required: true },
      validation: (Rule: any) =>
        Rule.required().min(1).error('"Cities" must have at least one item.'),
      of: [{ type: 'reference', to: [{ type: 'city' }] }],
    },
    {
      name: 'sectionTitle',
      title: 'Title Block',
      type: 'sectionTitle',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Title Block" is missing.'),
    },
  ],
  preview: {
    select: {
      title: 'sectionTitle.title',
      subtitle: 'sectionTitle.subtitle',
    },
    prepare({ title, subtitle }: { subtitle: string; title: string }) {
      return {
        media: FaCity,
        title: `Cities Gallery | ${title}`,
        subtitle,
      };
    },
  },
};
