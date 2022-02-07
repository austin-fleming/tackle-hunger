// @ts-nocheck TODO: remove this hack ASAP!!!
import React, { Fragment } from 'react';
import {
  AccordionList,
  ArticleText,
  CardsDual,
  CardsTextGrid,
  CardsWideList,
  Carousel,
  CitiesGallery,
  CollageDivider,
  HeroCollage,
  HeroLargeCard,
  IframePage,
  MapPromotion,
  NewsPromotion,
  PromoSponsors,
  PromoText,
  SponsorsReel,
  StatsPromotion,
  TeamGallery,
  TwinBackgroundBand,
  TwinCardWithCollage,
  TwinOverlappedCards,
} from '@components/sections';
import type {
  HomePageSingleton as HomePageSingletonProps,
  Page as PageProps,
} from 'lib/sanity/types';

export const RenderSections = ({ content }: PageProps | HomePageSingletonProps) => {
  if (!content || !content.length) {
    console.error('Missing section');
    return null;
  }

  return (
    <div>
      {content.map((section, index) => {
        if (!section._type) return null;
        return (
          // Sections will not shift after build, so indices aren't dynamic
          // eslint-disable-next-line react/no-array-index-key
          <Fragment key={`${section._type}${index}`}>
            {section._type === 'accordionList' && <AccordionList {...section} />}
            {section._type === 'articleText' && <ArticleText {...section} />}
            {section._type === 'cardsDual' && <CardsDual {...section} />}
            {section._type === 'cardsTextGrid' && <CardsTextGrid {...section} />}
            {section._type === 'cardsWideList' && <CardsWideList {...section} />}
            {section._type === 'collageDivider' && <CollageDivider {...section} />}
            {section._type === 'heroCollage' && <HeroCollage {...section} />}
            {section._type === 'heroLargeCard' && <HeroLargeCard {...section} />}
            {section._type === 'iframePage' && <IframePage {...section} />}
            {section._type === 'mapPromotion' && <MapPromotion {...section} />}
            {section._type === 'newsPromotion' && <NewsPromotion {...section} />}
            {section._type === 'sponsorsReel' && <SponsorsReel {...section} />}
            {section._type === 'statsPromotion' && <StatsPromotion {...section} />}
            {section._type === 'teamGallery' && <TeamGallery {...section} />}
            {section._type === 'twinBackgroundBand' && <TwinBackgroundBand {...section} />}
            {section._type === 'twinOverlappedCards' && <TwinOverlappedCards {...section} />}
            {section._type === 'promoText' && <PromoText {...section} />}
            {section._type === 'citiesGallery' && <CitiesGallery {...section} />}
            {section._type === 'twinCardWithCollage' && <TwinCardWithCollage {...section} />}
            {section._type === 'promoSponsors' && <PromoSponsors {...section} />}
            {section._type === 'carousel' && <Carousel {...section} />}
          </Fragment>
        );
      })}
    </div>
  );
};
