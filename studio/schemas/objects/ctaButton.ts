import { HiCursorClick } from 'react-icons/hi';

export default {
  name: 'ctaButton',
  title: 'Call to action Button',
  type: 'object',
  icon: HiCursorClick,
  fields: [
    {
      name: 'label',
      title: 'Label',
      type: 'string',
      description:
        "The text that appears on the button. Make it actionable. For example, instead of words like 'Submit' try 'Share Your Voice'.",
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Label" is missing.'),
    },
    {
      name: 'isBlankTarget',
      title: 'Open as New Page',
      type: 'boolean',
      initialValue: false,
    },
    {
      description: 'Use one of the following link options.',
      name: 'link',
      title: 'Link',
      type: 'link',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Link" is missing.'),
    },
    {
      name: 'style',
      title: 'Button Style',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          { title: 'Solid', value: 'solid' },
          { title: 'Outlined', value: 'outlined' },
          { title: 'Text', value: 'text' },
        ],
      },
      initialValue: 'text',
      codegen: { required: true },
      validation: (Rule: any) => Rule.required().error('"Button Style" is missing.'),
    },
  ],
  validation: (Rule: any) =>
    Rule.custom((fields: any) => {
      const allFields = [
        fields?.link?.donationWidget,
        fields?.link?.urlLink?.href,
        fields?.link?.internalLink,
        fields?.link?.download,
      ];
      const usedFields = allFields.filter((field) => !!field);

      if (usedFields.length > 1) {
        return 'Only (1) field should be used.';
      }

      if (usedFields.length === 0) {
        return 'Please use (1) field.';
      }
      return true;
    }),
};
