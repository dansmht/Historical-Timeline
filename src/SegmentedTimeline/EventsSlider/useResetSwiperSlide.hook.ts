import { useEffect } from 'react';

import type { Swiper as SwiperType } from 'swiper';
import type { TimelineEvent } from '../types';

export const useResetSwiperSlide = (
  swiperInstance: SwiperType | null,
  displayedEvents: TimelineEvent[],
) => {
  useEffect(() => {
    if (swiperInstance) {
      // Reset slide position when displayedEvents changed
      swiperInstance.slideTo(0, 0, false);
    }
  }, [swiperInstance, displayedEvents]);
};
