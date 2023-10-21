import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import Title from '../Title';
import NextButton from '../gameshow/NextButton';
import PreviousButton from '../gameshow/PreviousButton';

export default function App() {
  return (
    <>
      <div className="mt-40">
        <Title title="New games" />
      </div>
      <div className="relative">
        <div className="absolute top-[50%] flex w-full -translate-y-1/2 justify-between">
          <div className="translate-x-[]">
            <PreviousButton />
          </div>
          <div className="translate-x-[]">
            <NextButton />
          </div>
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 8,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            modules={[Pagination]}
            className="relative h-[25rem] w-[90%]"
          >
            <SwiperSlide className="mr-0  bg-light/20">Slide 1</SwiperSlide>
            <SwiperSlide className=" mr-0 bg-light/20">Slide 1</SwiperSlide>
            <SwiperSlide className=" mr-0 bg-light/20">Slide 1</SwiperSlide>
            <SwiperSlide className=" mr-0 bg-light/20">Slide 1</SwiperSlide>
            <SwiperSlide className=" mr-0 bg-light/20">Slide 1</SwiperSlide>
            <SwiperSlide className=" mr-0 bg-light/20">Slide 1</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
