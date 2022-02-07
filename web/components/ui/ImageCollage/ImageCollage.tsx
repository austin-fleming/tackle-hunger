import React from 'react'
import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled'

const CollageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: ${({ theme }) => (theme.spacing(2))};
  overflow-y: hidden;
`

const CollageColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`

const CollageImage = styled.div`
  width: 100%;
  padding-bottom: 100%;
  background-color: black;
`

type ImageCollageProps = {}

export const ImageCollage: React.FC<ImageCollageProps> = () => (
  <CollageWrapper>
    <CollageColumn>
      <CollageImage />
      <CollageImage />
      <CollageImage />
      <CollageImage />
    </CollageColumn>
    <CollageColumn>
      <CollageImage />
      <CollageImage />
      <CollageImage />
      <CollageImage />
    </CollageColumn>
    <CollageColumn>
      <CollageImage />
      <CollageImage />
      <CollageImage />
      <CollageImage />
    </CollageColumn>
  </CollageWrapper>
)
