import styled from '@emotion/styled';

type ElevationProps = 'low' | 'mid' | 'high' | 'none';
type OutlineProps = 'md' | 'thin' | 'none';
type PaddingSizeProps = 'sm' | 'md' | 'lg' | 'none';
type RadiusSizeProps = 'md' | 'lg' | 'none';
export type InfoCardProps = {
  children: any;
  cover?: boolean;
  elevation?: ElevationProps;
  hasTopRadius?: boolean;
  outline?: OutlineProps;
  paddingSize?: PaddingSizeProps;
  radiusSize?: RadiusSizeProps;
};

const paddingSizeTable = Object.freeze({
  lg: 4,
  md: 3,
  none: 0,
  sm: 2,
});

const elevationTable = Object.freeze({
  high: 8,
  low: 3,
  mid: 4,
});

const radiusSizeTable = Object.freeze({
  lg: 4,
  md: 3,
});

const StyledInfoCard = styled.div<{
  cover: boolean;
  elevation: ElevationProps;
  hasTopRadius: boolean;
  outline: OutlineProps;
  paddingSize: PaddingSizeProps;
  radiusSize: RadiusSizeProps;
}>`
  position: relative;
  ${({ theme, outline }) => outline !== 'none' && `border: ${theme.borders.primary[outline]};`};
  ${({ theme, radiusSize, hasTopRadius }) =>
    radiusSize !== 'none' &&
    `border-radius: ${hasTopRadius ? theme.spacing(radiusSizeTable[radiusSize]) : '0'} ${
      hasTopRadius ? theme.spacing(radiusSizeTable[radiusSize]) : '0'
    } ${theme.spacing(radiusSizeTable[radiusSize])} ${theme.spacing(radiusSizeTable[radiusSize])};`}
  ${({ theme, elevation }) =>
    elevation !== 'none' && `box-shadow: ${theme.shadows[elevationTable[elevation]]};`}
  padding: ${({ theme, paddingSize }) => theme.spacing(paddingSizeTable[paddingSize])};
  overflow: hidden;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.background.paper};
  ${({ cover }) => cover && `height: 100%; position: relative;`}
`;

export const InfoCard = ({
  children,
  elevation = 'low',
  outline = 'md',
  paddingSize = 'md',
  radiusSize = 'md',
  cover = false,
  hasTopRadius = true,
}: InfoCardProps) => (
  <StyledInfoCard
    cover={cover}
    elevation={elevation}
    hasTopRadius={hasTopRadius}
    outline={outline}
    paddingSize={paddingSize}
    radiusSize={radiusSize}>
    {children}
  </StyledInfoCard>
);
