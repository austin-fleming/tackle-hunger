import { RiTeamFill } from 'react-icons/ri';

export default {
  name: 'teamGallery',
  title: 'Team - Gallery',
  type: 'object',
  fields: [
    {
      name: 'textBlock',
      title: 'Header',
      type: 'sectionTitle',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Info Block" is missing.'),
    },
    {
      name: 'teamImage',
      title: 'Team Image',
      type: 'simpleImage',
    },
    {
      name: 'team',
      title: 'Team',
      type: 'reference',
      to: [{ type: 'teams' }],
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Team" is missing.'),
    },
    {
      name: 'displayDense',
      title: 'Make Grid Dense',
      description: 'If on, team member tiles will be shown smaller with more in each row.',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'textBlock.title',
      subtitle: 'textBlock.subtitle',
      media: 'teamImage',
    },
    prepare({ media, title, subtitle }: { media: any; subtitle: string; title: string }) {
      return {
        title: `Team Gallery | ${title}`,
        subtitle,
        media: media || RiTeamFill,
      };
    },
  },
};
