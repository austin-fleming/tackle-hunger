import { RiCoinsFill } from 'react-icons/ri';

export default {
  name: 'promoSponsors',
  title: 'Promo - Sponsors',
  type: 'object',
  fields: [
    {
      name: 'sponsorGroup',
      title: 'Sponsor Group',
      type: 'reference',
      to: [{ type: 'sponsorGroups' }],
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Sponsor Group" is missing.'),
    },
    {
      name: 'textBlock',
      title: 'Header',
      type: 'sectionTitle',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Info Block" is missing.'),
    },
  ],
  preview: {
    select: {
      title: 'textBlock.title',
      subtitle: 'textBlock.subtitle',
    },
    prepare({ title, subtitle }: { subtitle: string; title: string }) {
      return {
        title: `Promo Sponsors | ${title}`,
        subtitle,
        media: RiCoinsFill,
      };
    },
  },
};
