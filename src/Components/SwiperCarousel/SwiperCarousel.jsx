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
      <SwiperSlide id='s1' className='slide' >
        <div className="Swiper-carousel-section1">MEET OUR ENGINEERS</div>
        <div className="Swiper-carousel-section2">WE BELIEVE SUSTAINABILITY</div>
        <div className="Swiper-carousel-section3">We will deal with your failure that determines how you achieve success.</div>
        <div className="Swiper-carousel-section4">
          <button>GET FREE QUOTE</button>
          <button id='btn2'>LEARN MORE</button>
        </div>
      </SwiperSlide>
      <SwiperSlide id='s2' className='slide' >
      <div className="Swiper-carousel-section1 s2">17 YEARS OF EXCELLENCE IN</div>
        <div className="Swiper-carousel-section2 s2">CONSTRUCTION INDUSTRY</div>
        <div className="Swiper-carousel-section4 s2">
          <button>OUR SERVICES</button>
          <button id='btn2'>CONTACT NOW</button>
        </div>
      </SwiperSlide>
      <SwiperSlide id='s3' className='slide' >
          <button id='btn3'>WORLD CLASS SERVICE</button>
      <div className="Swiper-carousel-section1 s3">WHEN SERVICE MATTERS</div>
        <div className="Swiper-carousel-section2 s3">YOUR CHOICE IS SIMPLE</div>
        <div className="Swiper-carousel-section4 s3">
          <button id='btn2'>OUR SERVICE</button>
        </div>
      </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default SwiperCarousel
