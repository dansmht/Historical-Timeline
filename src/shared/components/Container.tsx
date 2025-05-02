import styled from 'styled-components';
import { Breakpoints } from '../constants/breakpoints';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  min-height: calc(100vh - 10px);
  margin: 0 auto;
  padding: 0 20px 10px;
  position: relative;

  @media (min-width: ${Breakpoints.lg}px) {
    border-left: 1px solid var(--color-main-10);
    border-right: 1px solid var(--color-main-10);
  }
`;
