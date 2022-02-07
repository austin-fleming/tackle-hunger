import React, { Fragment } from 'react';
// import { SanityKeyed, Section as SectionType } from '../types/generated/schema';
import { Section } from './Section';

export const RenderSections: React.FC<{ sections: SanityKeyed<SectionType>[] }> = ({
  sections,
}) => {
  if (!sections || !sections.length) {
    console.error('Missing section');
    return <div>Missing sections</div>;
  }
  return (
    <Fragment>
      {sections.map((section) => (
        // eslint-disable-next-line no-underscore-dangle
        <Section {...section} key={section._key} />
      ))}
    </Fragment>
  );
};
