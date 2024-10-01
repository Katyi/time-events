import React, { MouseEvent, useState } from 'react';
import { dataProps } from '@/globals';
import Arrows from './arrows/Arrows';
import ShowPagesChanges from './showPagesChanges/ShowPagesChanges';
import SwiperPart from './swiper/SwiperPart';
import Title from './title/Title';
import TimeWheel from './timeWheel/TimeWheel';
import toUpperChars from '@/utils/toUpperChars';
import MobilePagination from './mobilePagination/MobilePagination';
import ArrowsWrapper from './arrowsWrapper/ArrowsWrapper';

function TimePeriods({ data }: dataProps) {
  if (data.length < 2 || data.length > 6) {
    return;
  }
  const [currentPointIndex, setCurrentPointIndex] = useState<number>(
    data[0].index
  );
  const [startYear, setStartYear] = useState<number>(
    data[0].yearsInterval.start
  );
  const [lastYear, setLastYear] = useState<number>(data[0].yearsInterval.last);
  const [arrowStatus, setArrowControlsStatus] = useState<
    null | 'left' | 'right'
  >(null);
  const [updatingYears, setUpdatingYears] = useState<boolean>(false);
  const pointsData = data.map(({ id, index, label }: any) => ({
    id,
    index,
    label: toUpperChars(label),
  }));
  const sliderData = data[currentPointIndex - 1].details;
  const rotationDuration = 1;
  const isMobileScreen = window.innerWidth <= 768;

  const updateYears = (newIndex: number) => {
    setUpdatingYears(true);

    const newYearsInterval = data[newIndex - 1].yearsInterval;

    let castNumber = 1;

    if (currentPointIndex > newIndex || arrowStatus === 'left') {
      castNumber = -1;
    }

    let startYearCounter = Math.abs(startYear - newYearsInterval.start);
    let lastYearCounter = Math.abs(lastYear - newYearsInterval.last);
    let delay = (rotationDuration * 1000) / 2;

    if (startYearCounter > lastYearCounter) {
      delay = delay / startYearCounter;
    } else {
      delay = delay / lastYearCounter;
    }

    const interval = setInterval(() => {
      if (startYearCounter > 0) {
        setStartYear((prevYear) => prevYear + castNumber);
        startYearCounter--;
      }

      if (lastYearCounter > 0) {
        setLastYear((prevYear) => prevYear + castNumber);
        lastYearCounter--;
      }

      if (startYearCounter === 0 && lastYearCounter === 0) {
        clearInterval(interval);
        setUpdatingYears(false);
      }
    }, delay);
  };

  const handleBulletClick = (index: number) => {
    if (updatingYears) {
      return;
    }

    updateYears(index);

    setCurrentPointIndex(index);
  };

  const handleControlClick = (e: MouseEvent, castNumber: number) => {
    if (
      updatingYears ||
      e.currentTarget.classList.contains(
        'arrow-controls__arrow-left_disabled'
      ) ||
      e.currentTarget.classList.contains('arrow-controls__arrow-right_disabled')
    ) {
      return;
    }

    if (isMobileScreen) {
      updateYears(currentPointIndex + castNumber);
      setCurrentPointIndex((prevIndex) => prevIndex + castNumber);
    } else {
      setArrowControlsStatus(castNumber < 0 ? 'left' : 'right');
      setCurrentPointIndex((prevIndex) => prevIndex + castNumber);
    }
  };

  return (
    <>
      <div className="historical-dates">
        <Title />
        <TimeWheel
          currentPointIndex={currentPointIndex}
          startYear={startYear}
          lastYear={lastYear}
          pointsData={pointsData}
          rotationDuration={rotationDuration}
          bulletClickHandler={handleBulletClick}
          arrowStatus={arrowStatus}
          arrowControlsStatusSetter={setArrowControlsStatus}
        />
        <hr className="historical-dates__delimiter" />

        {/* Arrows part */}
        <ArrowsWrapper>
          <ShowPagesChanges
            currentPointIndex={currentPointIndex}
            pointsLength={data.length}
          />
          <Arrows
            controlClickHandler={handleControlClick}
            pointsLength={data.length}
            arrowStatus={arrowStatus}
            currentPointIndex={currentPointIndex}
          />
        </ArrowsWrapper>

        {/* Swiper part */}
        <SwiperPart sliderData={sliderData} isMobileScreen={isMobileScreen} />

        {/* For Mobile Pagination */}
        <MobilePagination
          currentPointIndex={currentPointIndex}
          pointsLength={data.length}
          bulletClickHandler={handleBulletClick}
        />
      </div>
    </>
  );
}

export default TimePeriods;
