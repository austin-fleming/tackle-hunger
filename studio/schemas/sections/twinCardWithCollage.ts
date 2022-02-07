import { RiLayout2Fill } from 'react-icons/ri';

export default {
  name: 'twinCardWithCollage',
  title: 'Twin - Card with Collage',
  type: 'object',
  icon: RiLayout2Fill,
  fields: [
    {
      name: 'isFlipped',
      title: 'Flip Layout',
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
      name: 'asHero',
      title: 'Use as Hero',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'collage',
      title: 'Collage',
      type: 'object',
      fields: [
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          description: 'See "Collage Style" for how many images are needed.',
          of: [{ type: 'simpleImage' }],
          codegen: { required: true },
          validation: (Rule: any) =>
            Rule.required().error(
              '"Images" requires at least (3) images. See "Collage Style" for exact amount.'
            ),
        },
        {
          name: 'collageStyle',
          title: 'Collage Style',
          type: 'string',
          options: {
            layout: 'radio',
            list: [
              { title: 'Bento (9 in a square grid)', value: 'bento' },
              { title: 'Single (1 image)', value: 'single' },
              { title: 'Triptych (3 in a row)', value: 'triptych' },
            ],
          },
          validation: (Rule: any) => Rule.required().error('"Collage Style" is missing.'),
          codegen: { required: true },
        },
      ],
      validation: (Rule: any) => Rule.required().error('"Collage" is missing.'),
      codegen: { required: true },
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
        title: `Twin Card with Collage ${isFlipped ? '(flipped) ' : ''}| ${title}`,
        subtitle,
        media,
      };
    },
  },
};
