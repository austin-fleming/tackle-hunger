import React from 'react';

const HTMLpreview = ({ value }) => (
  // eslint-disable-next-line
  <div dangerouslySetInnerHTML={{ __html: value.html }} />
);

export default {
  fields: [
    {
      description:
        'You usually want to avoid storing freeform HTML, but for embed codes it can be useful.',
      name: 'html',
      options: {
        language: 'html',
      },
      title: 'HTML',
      type: 'text',
    },
  ],
  name: 'embedHTML',
  preview: {
    component: HTMLpreview,
    select: {
      html: 'html',
    },
  },
  title: 'Embed HTML',
  type: 'object',
};
