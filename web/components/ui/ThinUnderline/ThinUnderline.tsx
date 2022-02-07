import { css } from '@emotion/react';
import styled from '@emotion/styled';

const StyledThinUnderline = styled.span<{ disable: boolean; onClick: any }>`
  --color: ${({ theme }) => theme.palette.brandPurple.main};
  ${({ disable }) =>
    disable
      ? css`
          color: gray;
        `
      : css`
          background-image: linear-gradient(var(--color) 0%, var(--color) 100%);
          background-repeat: repeat-x;
          background-position: 0 1.1em;
          background-size: 24px 24px;
        `}
  ${({ onClick }) =>
    onClick &&
    css`
      pointer-events: all;
      cursor: pointer;
      &:hover {
        color: var(--color);
      }
    `}
`;

export const ThinUnderline = ({
  children,
  disable = false,
  onClickAction,
}: {
  children: any;
  disable?: boolean;
  onClickAction?: () => void | undefined;
}) => (
  <StyledThinUnderline disable={disable} onClick={onClickAction}>
    {children}
  </StyledThinUnderline>
);
