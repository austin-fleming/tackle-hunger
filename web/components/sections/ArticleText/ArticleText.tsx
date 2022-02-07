import { ContentContainer, SectionContainer } from '@components/layouts';
import { SectionTitle } from '@components/ui';
import { simplePortableText } from 'lib/sanity/portableText';
import { ArticleText as ArticleTextProps } from 'lib/sanity/types';

export const ArticleText = ({ sectionTitle, body }: ArticleTextProps) => (
  <SectionContainer>
    <ContentContainer>
      <SectionTitle {...sectionTitle} />
      {body && <div>{simplePortableText(body)}</div>}
    </ContentContainer>
  </SectionContainer>
);
