export default {
  name: 'twinOverlappedCards',
  title: 'Twin - Overlapped Cards',
  type: 'object',
  fields: [
    {
      name: 'isFlipped',
      title: 'Flip Layout',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'asHero',
      title: 'Use as Hero',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'textBlock',
      title: 'Info Block',
      type: 'infoText',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Info Block" is missing.'),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'simpleImage',
    },
  ],
  preview: {
    select: {
      title: 'textBlock.headline',
      subtitle: 'textBlock.subHeadline',
      media: 'image',
      isFlipped: 'isFlipped',
    },
    prepare({
      media,
      title,
      subtitle,
      isFlipped,
    }: {
      isFlipped: boolean;
      media: any;
      subtitle: string;
      title: string;
    }) {
      return {
        title: `Twin Overlapped Cards ${isFlipped ? '(flipped) ' : ''}| ${title}`,
        subtitle,
        media,
      };
    },
  },
};
