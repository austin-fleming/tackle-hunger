import React from 'react';

const strokeStyle = {
  stroke: 'currentColor',
  style: { vectorEffect: 'non-scaling-stroke' } as const,
};

export const HamburgerIcon = (props: any) => (
  <svg
    fill='none'
    height='1em'
    preserveAspectRatio='xMidYMid'
    viewBox='0 0 25 25'
    width='1em'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <path d='M5 7.5H20' {...strokeStyle} />
    <path d='M5 12.5H20' {...strokeStyle} />
    <path d='M5 17.5H20' {...strokeStyle} />
  </svg>
);
