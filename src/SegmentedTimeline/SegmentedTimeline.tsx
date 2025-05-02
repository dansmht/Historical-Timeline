import styled from 'styled-components';
import { useState } from 'react';
import { TimelineYears } from './TimelineYears';
import { CircleTimelinePoints } from './CircleTimelinePoints/CircleTimelinePoints';
import { SegmentTopic } from './SegmentTopic';
import { EventsSlider } from './EventsSlider/EventsSlider';
import { TimelineNavigation } from './TimelineNavigation';
import { useSegmentYears } from './useSegmentYears.hook';
import { TIMELINE_CONTAINER_INLINE_PADDING, TIMELINE_TOP } from '../shared/constants/layoutConstants';
import { Breakpoints } from '../shared/constants/breakpoints';

import type { Segment } from './types';
import { MobileSegmentNavigation } from './MobileSegmentNavigation';
import { useMediaQuery } from '../shared/hooks';

const TimelineContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (min-width: ${Breakpoints.lg}px) {
    padding-inline: ${TIMELINE_CONTAINER_INLINE_PADDING}px;
    top: ${TIMELINE_TOP};
    flex-grow: initial;
  }
`;

type Props = {
  segments: Segment[];
};

export const SegmentedTimeline: React.FC<Props> = ({ segments }) => {
  const [activeSegmentIndex, setActiveSegmentIndex] = useState(0);

  const { firstYear, lastYear } = useSegmentYears(segments, activeSegmentIndex);

  const isDesktop = useMediaQuery(`(min-width: ${Breakpoints.lg}px)`);

  const handleSegmentClick = (idx: number) => {
    setActiveSegmentIndex(idx);
  };

  const handlePrevSegment = () => {
    setActiveSegmentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNextSegment = () => {
    setActiveSegmentIndex((prevIndex) => Math.min(segments.length - 1, prevIndex + 1));
  };

  return (
    <TimelineContainer>
      <TimelineYears start={firstYear} end={lastYear} />

      {isDesktop && (
        <CircleTimelinePoints
          segments={segments}
          activeIndex={activeSegmentIndex}
          handleSegmentClick={handleSegmentClick}
        />
      )}

      {!isDesktop && (
        <SegmentTopic topic={segments[activeSegmentIndex].topic} />
      )}

      <EventsSlider events={segments[activeSegmentIndex].events} />

      <TimelineNavigation
        activeIndex={activeSegmentIndex}
        totalSegments={segments.length}
        onPrev={handlePrevSegment}
        onNext={handleNextSegment}
      />

      {!isDesktop && (
        <MobileSegmentNavigation
          totalSegments={segments.length}
          activeIndex={activeSegmentIndex}
          onSegmentClick={handleSegmentClick}
        />
      )}
    </TimelineContainer>
  );
};
