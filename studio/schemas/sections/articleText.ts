import { GrTextWrap } from 'react-icons/gr';
import { blockContentToPlainText } from 'react-portable-text';

export default {
  name: 'articleText',
  title: 'Article Text',
  type: 'object',
  fields: [
    {
      name: 'sectionTitle',
      title: 'sectionTitle',
      type: 'sectionTitle',
    },
    {
      name: 'body',
      type: 'simplePortableText',
      title: 'Body',
    },
  ],
  preview: {
    select: {
      title: 'body',
    },
    prepare({ title }: { title: any }) {
      return {
        title: `Article Text ${title ? blockContentToPlainText(title).slice(0, 40) : 'not set'}`,
        media: GrTextWrap,
      };
    },
  },
};
