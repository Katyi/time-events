import { ArrowProps } from '@/globals';
import React from 'react';
export type arrowStatus = 'left' | 'right' | null;

const Arrows = ({
  currentPointIndex,
  pointsLength,
  arrowStatus,
  controlClickHandler: handleControlClick,
}: ArrowProps) => {
  return (
    <div className="arrow-controls">
      <div
        className={`arrow-controls__arrow-left ${
          (currentPointIndex === 1 || arrowStatus !== null) &&
          'arrow-controls__arrow-left_disabled'
        }`}
        onClick={(e) => handleControlClick(e, -1)}
      ></div>
      <div
        className={`arrow-controls__arrow-right ${
          (currentPointIndex === pointsLength || arrowStatus !== null) &&
          'arrow-controls__arrow-right_disabled'
        }`}
        onClick={(e) => handleControlClick(e, 1)}
      ></div>
    </div>
  );
};

export default Arrows;
