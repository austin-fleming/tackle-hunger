import { getImageDimensions, SanityImageSource } from '@sanity/asset-utils'

export { getImageDimensions }

export const getImageHeight = (source: SanityImageSource): number => getImageDimensions(source).height

export const getImageWidth = (source: SanityImageSource): number => getImageDimensions(source).width

export const getImageAspectRatio = (source: SanityImageSource): number => getImageDimensions(source).width
