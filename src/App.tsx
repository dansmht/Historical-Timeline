import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GlobalStyle } from './shared/styles/GlobalStyle';
import { HistoricalTimelineWidget } from './HistoricalTimelineWidget';

import 'swiper/css';

gsap.registerPlugin(useGSAP);

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <HistoricalTimelineWidget />
    </>
  );
};
