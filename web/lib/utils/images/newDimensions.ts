
export const newDimensionsByHeight = (origWidth: number, origHeight: number, newHeight: number) => Object.freeze({
  width: Math.ceil((origWidth / origHeight) * newHeight),
  height: newHeight
})

export const newDimensionsByWidth = (origWidth: number, origHeight: number, newWidth: number) => Object.freeze({
  width: newWidth,
  height: Math.ceil(newWidth / (origWidth / origHeight))
})
