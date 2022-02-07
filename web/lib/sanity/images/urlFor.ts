import imageUrlBuilder from '@sanity/image-url'
import {config} from 'config/sanity'
import {SimpleImage, Figure} from 'types/generated/schema'

const builder = imageUrlBuilder(config)

export const urlFor = (source: SimpleImage | Figure ) => builder.image(source)
