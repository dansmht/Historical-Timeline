const DEGREES_TO_RADIANS_FACTOR = Math.PI / 180;
const RADIANS_90_DEG = Math.PI / 2;
const RADIANS_30_DEG = Math.PI / 6;
const INITIAL_ANGLE_OFFSET_RAD = -RADIANS_90_DEG + RADIANS_30_DEG;
const VISUAL_RADIUS_ADJUSTMENT = 0.5;

const degreesToRadians = (degrees: number): number => {
  return degrees * DEGREES_TO_RADIANS_FACTOR;
};

export const calculatePosition = (
  index: number,
  rotationDegrees: number,
  radius: number,
  totalSegments: number,
): { x: number; y: number } => {

  const centerX = radius;
  const centerY = radius;

  const rotationRad = degreesToRadians(rotationDegrees);

  const angleStepRad = (2 * Math.PI) / totalSegments;
  const baseAngleRad = angleStepRad * index + INITIAL_ANGLE_OFFSET_RAD;
  const finalAngleRad = baseAngleRad + rotationRad;

  const effectiveRadius = radius + VISUAL_RADIUS_ADJUSTMENT;
  const relativeX = effectiveRadius * Math.cos(finalAngleRad);
  const relativeY = effectiveRadius * Math.sin(finalAngleRad);

  const x = centerX + relativeX;
  const y = centerY + relativeY;

  return { x, y };
};
