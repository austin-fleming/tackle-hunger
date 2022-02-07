import React from 'react'
import { css, useTheme } from '@emotion/react'
import { Grid } from '@material-ui/core'
import { ContentContainer } from './ContentContainer'

type ContentContainerGridProps = {
  children?: any,
  gridSpacing?: number
  maxCols?: number
}

export const ContentContainerGrid: React.FC<ContentContainerGridProps> = ({ children, gridSpacing = 2, maxCols = 2 }) => {
  const { spacing } = useTheme()

  const gridStyle = {
    display: 'grid',
    gridGap: spacing(gridSpacing),
    gridTemplateColumns: `repeat(${maxCols}, 1fr)`,
    gridTemplateRows: 'auto'
  }

  return (
    <ContentContainer>
      <div style={gridStyle}>
        {children}
      </div>
    </ContentContainer >
  )

}
