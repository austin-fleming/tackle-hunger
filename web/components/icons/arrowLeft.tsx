import React from 'react';

const strokeStyle = {
  stroke: 'currentColor',
  style: { vectorEffect: 'non-scaling-stroke' } as const,
};

export const ArrowLeftIcon = (props: any) => (
  <svg
    fill='none'
    height='5em'
    preserveAspectRatio='xMidYMid'
    viewBox='0 0 490 490'
    width='2em'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <path
      d='M413.476,398.302L258.215,245L413.476,91.69L324.619,0L76.524,245l248.094,245L413.476,398.302z M120.086,245L324.14,43.502
	l46.252,47.71L214.653,245l155.739,153.781l-46.252,47.717L120.086,245z'
      {...strokeStyle}
    />
  </svg>
);
