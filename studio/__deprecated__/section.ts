export default {
  fields: [
    {
      description: 'Hidden name for the section so it can be linked to',
      name: 'label',
      title: 'Label',
      type: 'string',
    },
    {
      name: 'headingAbove',
      title: 'Heading Above',
      type: 'customPortableText',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure',
    },
    {
      name: 'headingRight',
      title: 'Heading Right',
      type: 'customPortableText',
    },
    {
      name: 'headingBelow',
      title: 'Heading Below',
      type: 'customPortableText',
    },
    {
      name: 'headingLeft',
      title: 'Heading Left',
      type: 'customPortableText',
    },
    {
      description: 'Optional background image',
      name: 'backgroundImage',
      options: {
        hotspot: true,
      },
      title: 'Background image',
      type: 'image',
    },
    {
      description: 'Optional alternative background image to display on mobile',
      name: 'mobileBackgroundImage',
      options: {
        hotspot: true,
      },
      title: 'Mobile Background image',
      type: 'image',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'customPortableText',
    },
    {
      name: 'ctaButtons',
      of: [
        {
          title: 'Call to action Button',
          type: 'ctaButton',
        },
      ],
      title: 'Call to action Buttons',
      type: 'array',
    },
  ],
  name: 'section',
  preview: {
    prepare({ title, media }) {
      return {
        media,
        subtitle: 'Section',
        title,
      };
    },
    select: {
      media: 'backgroundImage',
      title: 'label',
    },
  },
  title: 'Section',
  type: 'object',
};
