const pluckFirstChar = (inputString: string): string => inputString.split('')[0]

const charIsOctothorp = (char: string): boolean => char === '#'

const startsWithOctothorp = (inputString: string): boolean => charIsOctothorp(pluckFirstChar(inputString))

export const isSection = (inputString: string): boolean => !!inputString && startsWithOctothorp(inputString)
