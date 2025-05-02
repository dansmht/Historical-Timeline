import styled from 'styled-components';
import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useIsFirstRender } from '../../shared/hooks';
import { calculatePosition } from './calculatePosition.util';
import { CIRCLE_RADIUS, FADE_DURATION, ROTATION_DURATION } from '../../shared/constants/layoutConstants';

const HoverArea = styled.div.attrs<{ $x: number; $y: number }>(({ $x, $y }) => ({
  style: {
    left: `${$x}px`,
    top: `${$y}px`,
  },
}))`
  position: absolute;
  z-index: 2;
`;

const HitZone = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 40px;
  height: 40px;
  transform: translate(-50%, -50%);
  pointer-events: auto;
  border-radius: 50%;
`;

const PointButton = styled.button<{ $expanded: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: ${({ $expanded }) => ($expanded ? 56 : 6)}px;
  height: ${({ $expanded }) => ($expanded ? 56 : 6)}px;
  background: ${({ $expanded }) => ($expanded ? "var(--color-white)" : "var(--color-main)")};
  border: ${({ $expanded }) => ($expanded ? "1px solid #303E5880" : "none")};
  border-radius: 50%;
  color: var(--color-main);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0;
  transition:
    background 0.2s,
    border 0.2s,
    width 0.18s ease-in-out,
    height 0.18s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  padding: 0;
  outline: none;
  pointer-events: auto;
`;

const SegmentTitle = styled.div`
  background: var(--color-white);
  color: var(--color-main);
  position: absolute;
  left: 100%;
  top: 50%;
  margin-left: 36px;
  transform: translateY(-50%);
  white-space: nowrap;
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  opacity: 0;
  pointer-events: none;
`;

interface SegmentPointProps {
  isActive: boolean;
  label?: string;
  index: number;
  total: number;
  rotation: number;
  onClick: (index: number) => void;
}

export const SegmentPoint: React.FC<SegmentPointProps> = ({
  isActive,
  label,
  index,
  total,
  rotation,
  onClick,
}) => {
  const titleRef = useRef<HTMLDivElement>(null);

  const [hovered, setHovered] = useState<number | null>(null);
  const expanded = isActive || hovered === index;
  const isFirstRender = useIsFirstRender();

  const { x, y } = calculatePosition(index, rotation, CIRCLE_RADIUS, total);

  useGSAP(() => {
    if (!titleRef.current || !label) return;

    const titleElement = titleRef.current;

    if (isFirstRender) {
      gsap.set(titleElement, {
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? 'auto' : 'none',
      });
      return;
    }

    if (isActive) {
      gsap.to(titleElement, {
        opacity: 1,
        delay: ROTATION_DURATION,
        duration: FADE_DURATION,
        overwrite: true,
        onStart: () => {
          titleElement.style.pointerEvents = 'auto';
        }
      });
    } else {
      gsap.to(titleElement, {
        opacity: 0,
        duration: FADE_DURATION,
        overwrite: true,
        onComplete: () => {
          titleElement.style.pointerEvents = 'none';
        }
      });
    }
  }, { dependencies: [isActive, label] });

  const handleSegmentPointMouseEnter = () => {
    setHovered(index);
  };

  const handleSegmentPointMouseLeave = () => {
    setHovered(null);
  };

  const handleClick = () => {
    onClick(index);
  };

  return (
    <HoverArea $x={x} $y={y}>
      <HitZone
        onMouseEnter={handleSegmentPointMouseEnter}
        onMouseLeave={handleSegmentPointMouseLeave}
      >
        <PointButton
          type="button"
          $expanded={expanded}
          onClick={handleClick}
          onFocus={handleSegmentPointMouseEnter}
          onBlur={handleSegmentPointMouseLeave}
        >
          {index + 1}
        </PointButton>

        {label && (
          <SegmentTitle ref={titleRef}>{label}</SegmentTitle>
        )}
      </HitZone>
    </HoverArea>
  );
};
