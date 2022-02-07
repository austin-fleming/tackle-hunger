import { IoIosArrowDropdownCircle } from 'react-icons/io';

export default {
  name: 'accordionItem',
  title: 'Accordion Item',
  type: 'object',
  icon: IoIosArrowDropdownCircle,
  fields: [
    {
      name: 'previewText',
      title: 'Preview Text',
      description: 'What can be seen when item is collapsed.',
      type: 'string',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Preview Text" is missing.'),
    },
    {
      name: 'content',
      title: 'Content',
      description: 'What can be seen when card is opened.',
      type: 'simplePortableText',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Content" is missing.'),
    },
  ],
};
