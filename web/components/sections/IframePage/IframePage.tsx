import { SectionContainer } from '@components/layouts';
import styled from '@emotion/styled';
import type { IframePage as IframePageProps } from 'types/generated/schema';

const StyledIframeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  border: none;
`;

export const IframePage = ({ src }: IframePageProps) => (
  <SectionContainer spacingBottom={0} spacingTop={0}>
    <StyledIframeWrapper>
      <StyledIframe src={src}>
        <p>Your browser does not support iframes.</p>
      </StyledIframe>
    </StyledIframeWrapper>
  </SectionContainer>
);
