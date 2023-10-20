import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
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
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
        modules={[Pagination]}
        className="m-none mx-5 h-full bg-primary"
      >
        <SwiperSlide className="mr-0 h-96 bg-light">Slide 1</SwiperSlide>
        <SwiperSlide className=" mr-0 h-96 bg-light">Slide 1</SwiperSlide>
        <SwiperSlide className=" mr-0 bg-light">Slide 1</SwiperSlide>
        <SwiperSlide className=" mr-0 bg-light">Slide 1</SwiperSlide>
        <SwiperSlide className=" mr-0 bg-light">Slide 1</SwiperSlide>
        <SwiperSlide className=" mr-0 bg-light">Slide 1</SwiperSlide>
      </Swiper>
    </>
  );
}
