import React, { useEffect, useRef } from 'react';
import { SectionCarouselCard } from '@components/layouts';
import { CarouselItem } from '@components/sections/Carousel/CarouselItem';
import styled from '@emotion/styled';
import type { Carousel as CarouselProps } from 'lib/sanity/types';
import { ArrowLeftIcon } from '../../icons/arrowLeft';
import { ArrowRightIcon } from '../../icons/arrowRight';

const CarouselDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  min-height: 750px;
`;

const CarouselLeftBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 0px;
  transform: translateY(-50%);
  background: transparent;
  border: 0;
  cursor: pointer;
`;

const CarouselRightBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
  background: transparent;
  border: 0;
  cursor: pointer;
`;

export const Carousel = ({ content }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const currSlide = useRef(0);

  const handleNextSlide = () => {
    if (carouselRef.current) {
      if (currSlide.current < content.length - 1) {
        currSlide.current += 1;
      }

      const scrollTo = carouselRef.current.offsetWidth * currSlide.current;
      carouselRef.current.scrollLeft = scrollTo;
    }
  };

  const handlePrevSlide = () => {
    if (carouselRef.current) {
      if (currSlide.current > 0) {
        currSlide.current -= 1;
      }

      const scrollTo = carouselRef.current.offsetWidth * currSlide.current;
      carouselRef.current.scrollLeft = scrollTo;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (carouselRef.current) {
        if (currSlide.current < content.length - 1) {
          currSlide.current += 1;
        } else if (currSlide.current === content.length - 1) {
          currSlide.current = 0;
        }
        const scrollTo = carouselRef.current.offsetWidth * currSlide.current;
        carouselRef.current.scrollLeft = scrollTo;
      }
    }, 8000);

    return () => {
      clearTimeout(timer);
    };
  }, [currSlide]);

  return (
    <SectionCarouselCard>
      <div style={{ position: 'relative' }}>
        {content && (
          <CarouselDiv ref={carouselRef}>
            {content.map((card) => (
              <div key={card._key} style={{ minWidth: '100%', scrollSnapAlign: 'start' }}>
                <CarouselItem {...card} />
              </div>
            ))}
          </CarouselDiv>
        )}
        <CarouselLeftBtn onClick={handlePrevSlide}>
          <ArrowLeftIcon />
        </CarouselLeftBtn>
        <CarouselRightBtn onClick={handleNextSlide}>
          <ArrowRightIcon />
        </CarouselRightBtn>
      </div>
    </SectionCarouselCard>
  );
};
