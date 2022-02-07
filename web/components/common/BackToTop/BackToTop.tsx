import * as React from "react"
import { useScrollTrigger, Zoom } from "@material-ui/core"
import styled from '@emotion/styled'

const ToTopButton = styled.div`
  bottom: 80px;
  position: fixed;
  right: 24px;
  z-index: 99;
`

export const BackToTop = ({
  children
}: {
  children: any
}) => {
  const trigger = useScrollTrigger()

  const handleClick = (event: any) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    )
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <Zoom in={trigger}>
      <ToTopButton role="presentation" onClick={handleClick}>
        {children}
      </ToTopButton>
    </Zoom>
  )
}
