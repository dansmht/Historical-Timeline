import { AppTitle, CentralLines, Container } from './shared/components';
import { SegmentedTimeline } from './SegmentedTimeline/SegmentedTimeline';
import { segments } from './SegmentedTimeline/data';

export const HistoricalTimelineWidget = () => (
  <Container>
    <AppTitle />
    <CentralLines />

    <SegmentedTimeline segments={segments} />
  </Container>
);
