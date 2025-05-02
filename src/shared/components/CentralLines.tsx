import styled from 'styled-components';
import { CIRCLE_RADIUS, TIMELINE_TOP } from '../constants/layoutConstants';
import { Breakpoints } from '../constants/breakpoints';

export const CentralLines = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  &::before, &::after {
    content: '';
    position: absolute;
    left: 50%;
    background: var(--color-main-10);
    transform: translateX(-50%);
  }

  /* Horizontal line */
  &::before {
    width: 100%;
    height: 2px;
    top: calc(${TIMELINE_TOP} + ${CIRCLE_RADIUS}px);
  }

  /* Vertical line */
  &::after {
    width: 2px;
    height: 100%;
    top: 0;
    transform: translateX(-50%);
  }

  @media (min-width: ${Breakpoints.lg}px) {
    display: block;
  }
`;
