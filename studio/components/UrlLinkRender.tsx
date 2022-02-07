import React from 'react';

const UrlLinkRender = ({ children }: { children: any }): JSX.Element => (
  <span aria-label='descriptive image' role='img'>
    {children} 🌍
  </span>
);

export default UrlLinkRender;
