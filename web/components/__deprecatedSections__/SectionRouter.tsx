import React from 'react'
import {
  HeroCollage,
  MapPromotion,
  NewsPromotion,
  SponsorsReel,
  StatsPromotion,
  CollageDivider
} from '@components/sections';
import { SanityKeyed, Page as PageProps } from 'types/generated/schema'

const mapper = {
  'heroCollage': HeroCollage,
  'mapPromotion': MapPromotion,
  'newsPromotion': NewsPromotion,
  'sponsorsReel': SponsorsReel,
  'statsPromotion': StatsPromotion,
  'collageDivider': CollageDivider
}

const curriedIsType = (type: string) => (testType: string) => type === testType

type SectionRouterProps = {
  content: any
}

export const SectionRouter = ({
  sectionContent
}: {
  sectionContent: PageProps['content']
}) => {
  const isMatchingType = curriedIsType(sectionContent._type)

  return <React.Fragment>
    {isMatchingType('collageDivider') && (<CollageDivider {...sectionContent} />)}
    {isMatchingType('heroCollage') && (<HeroCollage {...sectionContent} />)}
    {isMatchingType('mapPromotion') && (<MapPromotion {...sectionContent} />)}
    {isMatchingType('newsPromotion') && (<NewsPromotion {...sectionContent} />)}
    {isMatchingType('sponsorsReel') && (<SponsorsReel {...sectionContent} />)}
    {isMatchingType('statsPromotion') && (<StatsPromotion {...sectionContent} />)}
  </React.Fragment>
}
