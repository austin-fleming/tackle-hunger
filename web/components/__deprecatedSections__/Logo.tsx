import React from 'react'
import { SimpleImage } from 'types/generated/schema'
import Image from 'next/image'
import { urlFor } from "config/sanity";
import { getImageDimensions } from 'lib/sanity/assets'

type LogoProps = {
  logo: SimpleImage
}
export const Logo: React.FC<LogoProps> = ({ logo }) => {

  const { width, height } = getImageDimensions(logo.asset)

  return (
    <Image
      src={urlFor(logo.asset)}
      alt={logo.alt}
      width={width}
      height={height}
      layout='responsive'
    />
  )
}
