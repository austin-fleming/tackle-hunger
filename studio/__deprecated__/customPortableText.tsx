import React from 'react';
import { BsTypeBold } from 'react-icons/bs';
import { GiStrong } from 'react-icons/gi';
import { MdColorize } from 'react-icons/md';
// import ColorInput from '@sanity/color-input/lib/ColorInput';

const mediumRender = (props) => <span style={{ fontWeight: 500 }}>{props.children}</span>;
const boldRender = (props) => <span style={{ fontWeight: 'bold' }}>{props.children}</span>;
// const purpleRender = (props) => <span style={{ color: '#6d4992' }}>{props.children}</span>;
// const greenRender = (props) => <span style={{ color: '#43a048' }}>{props.children}</span>;

export default {
  name: 'customPortableText',
  of: [
    {
      lists: [],
      marks: {
        annotations: [
          // { type: 'link' },
          // { type: 'internalLink' },
          {
            name: 'color',
            title: 'Color',
            type: 'color',
          },
        ],
        decorators: [
          {
            blockEditor: {
              icon: BsTypeBold,
              render: mediumRender,
            },
            title: 'Strong',
            value: 'wt500',
          },
          {
            blockEditor: {
              icon: GiStrong,
              render: boldRender,
            },
            title: 'Souper Strong',
            value: 'bold',
          },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
        ],
      },
      styles: [],
      title: 'Block',
      type: 'block',
    },
    {
      type: 'embedHTML',
    },
  ],
  title: 'Custom Portable Text',
  type: 'array',
};
