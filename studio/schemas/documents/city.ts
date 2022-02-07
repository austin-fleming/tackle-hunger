import { MdPinDrop } from 'react-icons/md';
import { blockContentToPlainText } from 'react-portable-text';

export default {
  name: 'city',
  title: 'Cities',
  type: 'document',
  icon: MdPinDrop,
  fields: [
    {
      name: 'title',
      title: 'City Name',
      type: 'string',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"City Name" is missing.'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'simplePortableText',
    },
    {
      name: 'image',
      title: 'City Photo',
      type: 'simpleImage',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"City Photo" is missing.'),
    },
  ],
  preview: {
    select: {
      media: 'image',
      title: 'title',
      subtitle: 'description',
    },
    prepare({ media, title, subtitle }: { media: any; subtitle: any; title: string }) {
      return {
        title,
        media,
        subtitle: blockContentToPlainText(subtitle),
      };
    },
  },
};
