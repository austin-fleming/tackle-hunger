import { ContentContainer, SectionContainer } from '@components/layouts';
import { InfoText } from '@components/ui';
import type { PromoText as PromoTextProps } from 'lib/sanity/types';

export const PromoText = (props: PromoTextProps) => {
  const { content } = props;

  return (
    <SectionContainer>
      <ContentContainer>
        <InfoText {...content} asSection />
      </ContentContainer>
    </SectionContainer>
  );
};
