import styled from 'styled-components';
import { NavigationButton } from '../shared/components';
import { TIMELINE_CONTAINER_INLINE_PADDING } from '../shared/constants/layoutConstants';
import { Breakpoints } from '../shared/constants/breakpoints';

const NavigationWrapper = styled.div`
  margin-top: 60px;

  @media (min-width: ${Breakpoints.lg}px) {
    margin-top: 0;
    position: absolute;
    top: 415px;
    left: ${TIMELINE_CONTAINER_INLINE_PADDING}px;
    z-index: 5;
  }
`;

const SegmentText = styled.span`
  font-family: 'PT Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0;
  color: var(--color-main);
  user-select: none;
`;

const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;

  > button {
    width: 25px;
    height: 25px;

    @media (min-width: ${Breakpoints.sm}px) {
      width: 50px;
      height: 50px;
    }
  }
`;

const formatNumber = (num: number): string => {
  return num < 10 ? `0${num}` : `${num}`;
};

interface TimelineNavigationProps {
  activeIndex: number;
  totalSegments: number;
  onPrev: () => void;
  onNext: () => void;
}

export const TimelineNavigation: React.FC<TimelineNavigationProps> = ({
  activeIndex,
  totalSegments,
  onPrev,
  onNext,
}) => {
  const isPrevDisabled = activeIndex === 0;
  const isNextDisabled = activeIndex === totalSegments - 1;

  const currentSegmentFormatted = formatNumber(activeIndex + 1);
  const totalSegmentsFormatted = formatNumber(totalSegments);

  return (
    <NavigationWrapper>
      <SegmentText>
        {currentSegmentFormatted}/{totalSegmentsFormatted}
      </SegmentText>
      <ButtonsContainer>
        <NavigationButton
          onClick={onPrev}
          disabled={isPrevDisabled}
          aria-label="Previous segment"
          rotated
        />
        <NavigationButton
          onClick={onNext}
          disabled={isNextDisabled}
          aria-label="Next segment"
        />
      </ButtonsContainer>
    </NavigationWrapper>
  );
};
