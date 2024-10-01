import { BulletsPaginationProps } from '@/globals';
import React from 'react';

const MobilePagination = ({
  currentPointIndex,
  pointsLength,
  bulletClickHandler: handleBulletClick,
}: BulletsPaginationProps) => {
  const bullets = [];

  for (let i = 1; i <= pointsLength; i++) {
    bullets.push(
      <span
        style={{ color: 'red' }}
        key={`pagination-bullet-${i}`}
        className={`historical-dates__bullets-pagination__bullet ${
          i === currentPointIndex &&
          'historical-dates__bullets-pagination__bullet_active'
        }`}
        onClick={() => handleBulletClick(i)}
      ></span>
    );
  }

  return <div className="historical-dates__bullets-pagination">{bullets}</div>;
};

export default MobilePagination;
