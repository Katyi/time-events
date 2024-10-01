import { PointProps } from '@/globals';
import React from 'react';

const Point = ({
  index,
  label,
  prevPointRef,
  prevPointNumberRef,
  bulletClickHandler: handleBulletClick,
}: PointProps) => {
  return (
    <div className={`time-intervals__point point${index}`} ref={prevPointRef}>
      <span
        className="point-number"
        ref={prevPointNumberRef}
        onClick={() => handleBulletClick(index)}
      >
        {index}
      </span>
      <span className="point-label">{label}</span>
    </div>
  );
};

export default Point;
