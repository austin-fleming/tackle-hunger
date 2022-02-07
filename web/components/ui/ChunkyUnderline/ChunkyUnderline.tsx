import styled from '@emotion/styled';

const StyledChunkyUnderline = styled.span<{ disable: boolean }>`
  --color: ${({ theme }) => theme.palette.brandYellow.main};
  ${({ disable }) =>
    !disable &&
    `
      background-image: linear-gradient(var(--color) 0%, var(--color) 100%);
      background-repeat: repeat-x;
      background-position: 0 0.7em;
      background-size: 16px 18px;
  `}
`;

export const ChunkyUnderline = ({
  children,
  disable = false,
}: {
  children: any;
  disable?: boolean;
}) => <StyledChunkyUnderline disable={disable}>{children}</StyledChunkyUnderline>;
