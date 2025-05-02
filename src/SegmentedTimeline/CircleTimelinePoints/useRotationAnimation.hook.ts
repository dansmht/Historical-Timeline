import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { usePreviousValue } from '../../shared/hooks';

interface AnimatedRotationOptions {
  duration?: number;
  ease?: string;
}

export const useRotationAnimation = (
  activeIndex: number,
  totalSegments: number,
  options?: AnimatedRotationOptions
): number => {
  const { duration = 0.7, ease = 'power1.inOut' } = options ?? {};
  const angleRef = useRef<{ value: number }>({ value: 0 });
  const [displayRotation, setDisplayRotation] = useState<number>(0);
  const previousActiveIndex = usePreviousValue(activeIndex, true);

  useGSAP(() => {
    if (previousActiveIndex === activeIndex) return;

    const currentAngle = angleRef.current.value;
    const targetAngle = -(activeIndex / totalSegments) * 360;

    const shortestDelta = gsap.utils.wrap(-180, 180)(targetAngle - currentAngle);
    const finalTargetAngle = currentAngle + shortestDelta;

    gsap.to(angleRef.current, {
      value: finalTargetAngle,
      duration,
      ease,
      onUpdate: () => {
        setDisplayRotation(gsap.utils.wrap(-180, 180)(angleRef.current.value));
      },
      onComplete: () => {
        angleRef.current.value = gsap.utils.wrap(-180, 180)(finalTargetAngle);
        setDisplayRotation(gsap.utils.wrap(-180, 180)(angleRef.current.value));
      },
      overwrite: true,
    });
  }, { dependencies: [activeIndex, previousActiveIndex, totalSegments, duration, ease] });

  return displayRotation;
}
