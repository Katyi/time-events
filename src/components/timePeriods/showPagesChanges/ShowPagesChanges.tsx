import { ShowPagesChangesProps } from '@/globals';
import React from 'react';

const ShowPagesChanges = ({
  currentPointIndex,
  pointsLength,
}: ShowPagesChangesProps) => {
  return (
    <span className="historical-dates__fraction-pagination">{`0${currentPointIndex}/0${pointsLength}`}</span>
  );
};

export default ShowPagesChanges;
