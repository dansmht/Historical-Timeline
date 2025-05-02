import styled from 'styled-components';
import { Breakpoints } from '../shared/constants/breakpoints';
import { useFadeOnChange } from './useFadeOnChange.hook';

const Wrapper = styled.div`
  margin-top: auto;
  width: 100%;
  margin-bottom: 25px;

  @media (min-width: ${Breakpoints.lg}px) {
    display: none;
  }
`;

const TopicText = styled.div`
  margin-bottom: 40px;
  font-size: 20px;
  font-weight: 700;
  color: var(--color-main);
  text-align: left;
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #C7CDD9;
`;

interface SegmentTopicProps {
  topic: string;
}

export const SegmentTopic: React.FC<SegmentTopicProps> = ({ topic }) => {
  const { displayedData, containerRef } = useFadeOnChange(topic);

  return (
    <Wrapper ref={containerRef}>
      <TopicText>{displayedData}</TopicText>
      <HorizontalLine />
    </Wrapper>
  );
};
