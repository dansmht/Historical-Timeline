import { useEffect, useRef } from 'react';

import type { Swiper as SwiperType } from 'swiper';

export const useSwiperNavigation = (swiperInstance: SwiperType | null) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      typeof swiperInstance.params.navigation === 'object'
    ) {
      Object.assign(swiperInstance.params.navigation, {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      });
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return { prevRef, nextRef };
};
