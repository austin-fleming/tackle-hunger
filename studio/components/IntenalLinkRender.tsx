import React from 'react';

const InternalLinkRender = ({ children }: { children: any }): JSX.Element => (
  <span aria-label='descriptive image' role='img'>
    {children} 🔗
  </span>
);

export default InternalLinkRender;
