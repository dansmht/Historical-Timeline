import styled from 'styled-components';
import { Breakpoints } from '../shared/constants/breakpoints';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 22px;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: ${Breakpoints.lg}px) {
    display: none;
  }
`;

const DotWrapper = styled.button`
  padding: 5px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &:hover {
    background-color: var(--color-main-10);
  }
`;

const Dot = styled.div<{ isActive: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ isActive }) => isActive ? 'var(--color-main)' : 'var(--color-main-80)'};
  transition: background-color 0.2s ease-in-out;
`;

interface MobileSegmentNavigationProps {
  totalSegments: number;
  activeIndex: number;
  onSegmentClick: (index: number) => void;
}

export const MobileSegmentNavigation: React.FC<MobileSegmentNavigationProps> = ({
  totalSegments,
  activeIndex,
  onSegmentClick,
}) => {
  return (
    <NavigationContainer>
      {Array.from({ length: totalSegments }).map((_, index) => (
        <DotWrapper
          key={index}
          onClick={() => onSegmentClick(index)}
          aria-label={`Перейти к сегменту ${index + 1}`}
        >
          <Dot isActive={index === activeIndex} />
        </DotWrapper>
      ))}
    </NavigationContainer>
  );
};
