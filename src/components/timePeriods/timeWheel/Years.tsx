import { YearsIntervalProps } from '@/globals';
import React from 'react';

const Years = ({ startYear, lastYear }: YearsIntervalProps) => {
  return (
    <div className="time-intervals__years-interval">
      <span className="years-interval__start-year">{startYear}</span>
      &nbsp;&nbsp;
      <span className="years-interval__final-year">{lastYear}</span>
    </div>
  );
};

export default Years;
