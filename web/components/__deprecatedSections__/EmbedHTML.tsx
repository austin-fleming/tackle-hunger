import React from 'react';

export const EmbedHTML: React.FC<{ node: { html: string } }> = ({ node }) =>
  // eslint-disable-next-line react/no-danger
  node?.html ? <div dangerouslySetInnerHTML={{ __html: node.html }} /> : null;
