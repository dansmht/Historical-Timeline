import styled from 'styled-components';
import { SegmentPoint } from './SegmentPoint';
import { useRotationAnimation } from './useRotationAnimation.hook';
import { CIRCLE_SIZE, ROTATION_DURATION } from '../../shared/constants/layoutConstants';

import type { Segment } from '../types';
import { Breakpoints } from '../../shared/constants/breakpoints';

const Circle = styled.div`
  display: none;
  position: relative;
  width: ${CIRCLE_SIZE}px;
  height: ${CIRCLE_SIZE}px;
  margin: 0 auto;
  border: 1px solid var(--color-main-20);
  border-radius: 50%;

  @media (min-width: ${Breakpoints.lg}px) {
    display: block;
  }
`;

interface CircleTimelinePointsProps {
  segments: Segment[];
  activeIndex: number;
  handleSegmentClick: (idx: number) => void;
}

export const CircleTimelinePoints: React.FC<CircleTimelinePointsProps> = ({
  segments,
  activeIndex,
  handleSegmentClick,
}) => {

  const rotation = useRotationAnimation(
    activeIndex,
    segments.length,
    { duration: ROTATION_DURATION },
  );

  return (
    <Circle>
      {segments.map(({ id, topic }, i) =>
        <SegmentPoint
          key={id}
          label={topic}
          index={i}
          isActive={activeIndex === i}
          total={segments.length}
          rotation={rotation}
          onClick={handleSegmentClick}
        />
      )}
    </Circle>
  );
};
