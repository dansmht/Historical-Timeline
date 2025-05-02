import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useIsFirstRender, usePreviousValue } from '../shared/hooks';
import { FADE_DURATION } from '../shared/constants/layoutConstants';

export const useFadeOnChange = <T>(data: T) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayedData, setDisplayedData] = useState<T>(data);
  const previousData = usePreviousValue(data);
  const isFirstRender = useIsFirstRender();

  useGSAP(() => {
    const element = containerRef.current;

    if (!element || isFirstRender || previousData === data) return;

    gsap.to(element, {
      opacity: 0,
      duration: FADE_DURATION,
      overwrite: true,
      onComplete: () => {
        setDisplayedData(data);

        gsap.to(element, {
          opacity: 1,
          duration: FADE_DURATION,
        });
      },
    });
  }, { scope: containerRef, dependencies: [data, previousData, isFirstRender] });

  return { displayedData, containerRef };
};
