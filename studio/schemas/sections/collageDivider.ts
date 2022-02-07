import { GrMore } from 'react-icons/gr';

export default {
  fields: [
    {
      description:
        'Add at least 6 images to build out the collage gallery. They will appear on the site in the order they are listed, from left to right.',
      name: 'imageGallery',
      of: [{ type: 'simpleImage' }],
      title: 'Image Gallery',
      type: 'array',
      validation: (Rule: any) =>
        Rule.required().min(6).max(6).error('"Image Gallery" should have 6 images.'),
    },
  ],
  name: 'collageDivider',
  title: 'Divider - Collage',
  type: 'object',
  preview: {
    prepare() {
      return {
        title: 'Divider Collage',
        media: GrMore,
      };
    },
  },
};
