import styled from 'styled-components';
import { forwardRef } from 'react';

interface NavButtonStyleProps {
  $rotated?: boolean;
  size?: number;
  $border?: string;
  $boxShadow?: string;
  $iconColor?: string;
  $hoverBackgroundColor?: string;
  disabledBorderColor?: string;
  disabledIconColor?: string;
  $iconWidth?: number;
  $iconHeight?: number;
}

interface NavigationButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'ref'> {
  rotated?: boolean;
  size?: number;
  border?: string;
  boxShadow?: string;
  iconColor?: string;
  hoverBackgroundColor?: string;
  disabledBorderColor?: string;
  disabledIconColor?: string;
  iconWidth?: number;
  iconHeight?: number;
}

const StyledNavButton = styled.button<NavButtonStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  transition: background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  width: ${({ size = 50 }) => size}px;
  height: ${({ size = 50 }) => size}px;
  border: ${({ $border = '1px solid var(--color-main-80)' }) => $border};
  box-shadow: ${({ $boxShadow = 'none' }) => $boxShadow};
  transform: ${({ $rotated }) => ($rotated ? 'rotate(-180deg)' : 'none')};

  svg {
    width: ${({ $iconWidth = 7 }) => $iconWidth}px;
    height: ${({ $iconHeight = 12 }) => $iconHeight}px;
    display: block;

    path {
      stroke: ${({ $iconColor = 'var(--color-main)' }) => $iconColor};
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  }

  &:hover:not(:disabled) {
    background-color: ${({ $hoverBackgroundColor = 'rgba(244, 247, 251, 0.5)' }) => $hoverBackgroundColor};
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
    border-color: ${({ disabledBorderColor = 'var(--color-main-20)', $border }) =>
      $border !== 'none' ? disabledBorderColor : 'transparent'};

    svg path {
      stroke: ${({ disabledIconColor = 'var(--color-main-80)' }) => disabledIconColor};
    }
  }

  &.swiper-button-disabled {
      cursor: default;
      opacity: 0;
  }
`;

interface ArrowIconProps {
  width?: number;
  height?: number;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ width = 7, height = 12 }) => (
  <svg width={width} height={height} viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L6 6L1 11" />
  </svg>
);

export const NavigationButton = forwardRef<HTMLButtonElement, NavigationButtonProps>(({
  rotated,
  size,
  border,
  boxShadow,
  iconColor,
  hoverBackgroundColor,
  disabledBorderColor,
  disabledIconColor,
  iconWidth,
  iconHeight,
  ...rest
}, ref) => {
  return (
    <StyledNavButton
      ref={ref}
      $rotated={rotated}
      size={size}
      $border={border}
      $boxShadow={boxShadow}
      $iconColor={iconColor}
      $hoverBackgroundColor={hoverBackgroundColor}
      disabledBorderColor={disabledBorderColor}
      disabledIconColor={disabledIconColor}
      $iconWidth={iconWidth}
      $iconHeight={iconHeight}
      {...rest}
    >
      <ArrowIcon width={iconWidth} height={iconHeight} />
    </StyledNavButton>
  );
});