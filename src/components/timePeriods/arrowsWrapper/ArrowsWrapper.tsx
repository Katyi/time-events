import { WrapperProps } from '@/globals';
import React, { ReactNode } from 'react';

const ArrowsWrapper = ({ children }: WrapperProps) => {
  return <div className="historical-dates__controls-wrapper">{children}</div>;
};

export default ArrowsWrapper;
