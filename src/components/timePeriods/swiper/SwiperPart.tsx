import { slideData, SliderProps } from '@/globals';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

const SwiperPart = ({ sliderData, isMobileScreen }: SliderProps) => {
  return (
    <>
      <div className="swiper__wrapper">
        <Swiper
          slidesPerView={isMobileScreen ? 2 : 3}
          freeMode={isMobileScreen ? true : false}
          grabCursor={isMobileScreen ? false : true}
          navigation={{
            prevEl: '.swiper__button-prev',
            nextEl: '.swiper__button-next',
          }}
          modules={[Pagination, Navigation]}
          className=".swiper"
        >
          {sliderData.map((item: slideData) => {
            return (
              <SwiperSlide key={item.year}>
                <div className="swiper-slide__title">{item.year}</div>
                <div className="swiper-slide__description">
                  {item.description}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className="swiper__button-prev"></button>
        <button className="swiper__button-next"></button>
      </div>
      <div className="swiper__pagination"></div>
    </>
  );
};

export default SwiperPart;