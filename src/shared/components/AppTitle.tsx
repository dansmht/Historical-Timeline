import styled from 'styled-components';
import { APP_TITLE_TOP } from '../constants/layoutConstants';
import { Breakpoints } from '../constants/breakpoints';

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  pointer-events: none;

  @media (min-width: ${Breakpoints.lg}px) {
    position: absolute;
    top: ${APP_TITLE_TOP};
    left: 0;
    z-index: 100;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 5px;
      height: 120px;
      background: linear-gradient(
        to bottom,
        var(--color-blue),
        var(--color-pink)
      );
      z-index: 0;
    }
  }
`;

const Title = styled.h1`
  margin: 55px 0;
  max-width: 125px;
  font-family: 'PT Sans', sans-serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 120%;
  letter-spacing: 0;
  color: var(--color-main);

  @media (min-width: ${Breakpoints.sm}px) {
    margin-left: 75px;
    font-size: 48px;
    max-width: 350px;
  }
`;

export const AppTitle: React.FC = () => (
  <TitleWrapper>
    <Title>Исторические даты</Title>
  </TitleWrapper>
);
