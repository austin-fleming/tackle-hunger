/* eslint-disable react/no-multi-comp */
import React from 'react';
import { EmbedHTML } from './EmbedHTML';
// import { Figure } from './Figure';

const Bold: React.FC = ({ children }) => <span style={{ fontWeight: 700 }}>{children}</span>;

const Color: React.FC<{ mark: any }> = ({ mark, children }) => (
  <span style={{ color: mark.hex }}>{children}</span>
);

const FontWeight500: React.FC = ({ children }) => (
  <span style={{ fontWeight: 500 }}>{children}</span>
);

export const serializers = {
  marks: { bold: Bold, color: Color, wt500: FontWeight500 },
  types: {
    embedHTML: EmbedHTML,
  },
};
