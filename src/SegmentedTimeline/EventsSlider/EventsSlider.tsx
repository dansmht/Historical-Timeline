import styled from 'styled-components';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SliderNavigationControls } from './SliderNavigationControls';
import { useSwiperNavigation } from './useSwiperNavigation.hook';
import { useFadeOnChange } from '../useFadeOnChange.hook';
import { useResetSwiperSlide } from './useResetSwiperSlide.hook';
import { useMediaQuery } from '../../shared/hooks';
import { Breakpoints } from '../../shared/constants/breakpoints';

import type { Swiper as SwiperType } from 'swiper';
import type { TimelineEvent } from '../types';

const EventsSliderWrap = styled.div`
  position: relative;
  opacity: 1;
  touch-action: pan-y;

  @media (min-width: ${Breakpoints.lg}px) {
    margin-top: 32px;
  }
`;

const EventYear = styled.strong`
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-size: 25px;
  line-height: 120%;
  letter-spacing: 0;
  text-transform: uppercase;
  color: var(--color-blue);
`;

const EventDescription = styled.div`
  font-family: 'PT Sans', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0;
  color: var(--color-main);
  margin-top: 8px;
`;

interface EventsSliderProps {
  events: TimelineEvent[];
}

export const EventsSlider: React.FC<EventsSliderProps> = ({ events }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const isDesktop = useMediaQuery(`(min-width: ${Breakpoints.lg}px)`);

  const { prevRef, nextRef } = useSwiperNavigation(swiperInstance);
  const {
    displayedData: displayedEvents,
    containerRef,
  } = useFadeOnChange(events);
  useResetSwiperSlide(swiperInstance, displayedEvents);

  return (
    <EventsSliderWrap ref={containerRef}>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        breakpoints={{
          [Breakpoints.sm]: {
            slidesPerView: 3,
            spaceBetween: 45
          },
          [Breakpoints.xl]: {
            slidesPerView: 3.33,
            spaceBetween: 80
          },
        }}
        modules={[Navigation]}
        navigation={false}
        onSwiper={setSwiperInstance}
      >
        {displayedEvents.map((event) => (
          <SwiperSlide key={event.id}>
            <EventYear>{event.year}</EventYear>
            <EventDescription>{event.description}</EventDescription>
          </SwiperSlide>
        ))}
      </Swiper>

      {isDesktop && (
        <SliderNavigationControls
          prevRef={prevRef}
          nextRef={nextRef}
        />
      )}
    </EventsSliderWrap>
  );
};
