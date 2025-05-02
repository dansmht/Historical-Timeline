import { useMemo } from 'react';

import type { Segment } from './types';

export const useSegmentYears = (segments: Segment[], index: number) => {
  return useMemo(() => {
    const events = segments[index]?.events || [];

    if (events.length === 0) {
      return { firstYear: 0, lastYear: 0 };
    }

    const years = events.map(e => e.year);
    return {
      firstYear: Math.min(...years),
      lastYear: Math.max(...years),
    };
  }, [segments, index]);
}
