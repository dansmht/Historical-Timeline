import styled from 'styled-components';
import { NavigationButton } from '../../shared/components';
import { Breakpoints } from '../../shared/constants/breakpoints';

const SliderNavigation = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  left: -60px;
  right: -60px;
  transform: translateY(-50%);
  justify-content: space-between;
  z-index: 10;
  pointer-events: none;

  > button {
    pointer-events: auto;
  }

  @media (min-width: ${Breakpoints.lg}px) {
    display: flex;
  }
`;

interface SliderNavigationControlsProps {
  prevRef: React.RefObject<HTMLButtonElement | null>;
  nextRef: React.RefObject<HTMLButtonElement | null>;
}

export const SliderNavigationControls: React.FC<SliderNavigationControlsProps> = ({
  prevRef,
  nextRef,
}) => {

  const commonNavigationButtonProps = {
    size: 40,
    border: 'none',
    iconColor: 'var(--color-blue)',
    hoverBackgroundColor: 'var(--color-blue-10)',
    boxShadow: '0 0 15px var(--color-blue-20)',
    iconWidth: 5,
    iconHeight: 10,
  }

  return (
    <SliderNavigation>
      <NavigationButton
        {...commonNavigationButtonProps}
        ref={prevRef}
        aria-label="Previous event"
        rotated
      />
      <NavigationButton
        {...commonNavigationButtonProps}
        ref={nextRef}
        aria-label="Next event"
      />
    </SliderNavigation>
  );
};
