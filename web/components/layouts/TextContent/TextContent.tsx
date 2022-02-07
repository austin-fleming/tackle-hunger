import React from 'react'
import styled from '@emotion/styled'


const TextContainer = styled.div<{ centered: boolean, gapSpacing: number, maxChWidth?: number, paddingSpacing: number }>`
padding: ${({ theme, paddingSpacing }) => theme.spacing(paddingSpacing * 0.75)};
display: grid;
gap: ${({ theme, gapSpacing }) => theme.spacing(gapSpacing)};
grid-template-columns: 1fr;
grid-template-rows: auto;
align-items: flex-start;

@media (min-width: ${({ theme }) => (theme.breakpoints.values.sm)}px) {
      padding: ${({ theme, paddingSpacing }) => theme.spacing(paddingSpacing)};
    }

& * {
  ${({ maxChWidth }) => (maxChWidth && `max-width: ${maxChWidth}ch;`)}
  ${({ centered }) => (centered && `text-align: center; margin-right: auto; margin-left: auto;`)}
  ${({ centered }) => (!centered && `margin-right: auto; margin-left: 0;`)}
}
`

type TextContentProps = {
  centered?: boolean,
  children: any,
  gapSpacing?: number,
  maxChWidth?: number,
  paddingSpacing?: number
}

export const TextContent: React.FC<TextContentProps> = ({
  children,
  gapSpacing = 4,
  maxChWidth,
  paddingSpacing = 4,
  centered = false
}) => (<TextContainer centered={centered} gapSpacing={gapSpacing} maxChWidth={maxChWidth} paddingSpacing={paddingSpacing} >{children}</TextContainer>)
