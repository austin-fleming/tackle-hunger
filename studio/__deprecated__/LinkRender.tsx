import React from 'react';

const LinkRender = ({ children }: { children: any }): JSX.Element => (
  <span aria-label='desriptive image' role='img'>
    {children} 🌍
  </span>
);

export default LinkRender;
