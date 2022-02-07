import { MdShortText } from 'react-icons/md';
import { blockContentToPlainText } from 'react-portable-text';

export default {
  name: 'promoText',
  title: 'Promo - Text',
  type: 'object',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'infoText',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Content" is missing.'),
    },
  ],
  preview: {
    select: {
      title: 'content.headline',
      subtitle: 'content.body',
    },
    prepare({ title, subtitle }: { subtitle: any; title: string }) {
      return {
        title: `Promo Text | ${title}`,
        subtitle: blockContentToPlainText(subtitle),
        media: MdShortText,
      };
    },
  },
};
