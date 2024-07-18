import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y,Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./SwiperCarousel.css"


const SwiperCarousel = () => {
  


  return (
    <div className='swiper-carousel'>
      <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      speed={700}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide id='s1' className='slide' >Slide 1</SwiperSlide>
      <SwiperSlide id='s2' className='slide' >Slide 2</SwiperSlide>
      <SwiperSlide id='s3' className='slide' >Slide 3</SwiperSlide>
    </Swiper>
    </div>
  )
}

export default SwiperCarousel
