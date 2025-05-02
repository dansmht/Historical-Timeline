import styled from 'styled-components';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { CIRCLE_RADIUS, YEAR_ANIMATION_DURATION } from '../shared/constants/layoutConstants';
import { Breakpoints } from '../shared/constants/breakpoints';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;

  @media (min-width: ${Breakpoints.lg}px) {
    position: absolute;
    left: 50%;
    top: ${CIRCLE_RADIUS}px;
    transform: translate(-50%, -50%);
    gap: 60px;
  }

  @media (min-width: ${Breakpoints.xl}px) {
    gap: 90px;
  }
`;

const YearNumber = styled.div<{ color: string }>`
  font-family: 'PT Sans', sans-serif;
  font-weight: 700;
  text-align: center;
  color: ${({ color }) => color};
  user-select: none;

  font-size: 56px;
  line-height: 100%;
  letter-spacing: -1.12px;

  @media (min-width: ${Breakpoints.sm}px) {
    font-size: 100px;
    line-height: 80px;
    letter-spacing: -2px;
  }

  @media (min-width: ${Breakpoints.xl}px) {
    font-size: 200px;
    line-height: 160px;
    letter-spacing: -4px;
  }
`;


interface TimelineYearsProps {
  start: number;
  end: number;
}

export const TimelineYears = ({ start, end }: TimelineYearsProps) => {
  const target = useRef({
    currentStart: start,
    currentEnd: end,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const [displayedStart, setDisplayedStart] = useState(start);
  const [displayedEnd, setDisplayedEnd] = useState(end);

  useGSAP(() => {
    gsap.to(target.current, {
      currentStart: start,
      currentEnd: end,
      duration: YEAR_ANIMATION_DURATION,
      ease: 'power1.out',
      overwrite: true,
      onUpdate: () => {
        setDisplayedStart(Math.round(target.current.currentStart));
        setDisplayedEnd(Math.round(target.current.currentEnd));
      },
    });
  }, { dependencies: [start, end], scope: containerRef });

  return (
    <Wrapper ref={containerRef}>
      <YearNumber color="var(--color-blue)">{displayedStart}</YearNumber>
      <YearNumber color="var(--color-pink)">{displayedEnd}</YearNumber>
    </Wrapper>
  );
};
