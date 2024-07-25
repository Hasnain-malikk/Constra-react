import React from 'react'
import "./PersonalTeam.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation} from 'swiper/modules';
import 'swiper/css/navigation';

const PersonalTeam = () => {
  return (
    <div className='personal-team'>
      <div className="personal-team-heading">
        <p>QUALITY SERVICE</p>
        <h1>PROFESSIONAL TEAM</h1>
      </div>
      <div className="personal-team-body">
        <Swiper className='swiper4'
        modules={[Navigation]}
        spaceBetween={25}
        slidesPerView={4}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide className='swiper4-slide'>Slide 1</SwiperSlide>
        <SwiperSlide className='swiper4-slide'>Slide 2</SwiperSlide>
        <SwiperSlide className='swiper4-slide'>Slide 3</SwiperSlide>
        <SwiperSlide className='swiper4-slide'>Slide 4</SwiperSlide>
        <SwiperSlide className='swiper4-slide'>Slide 4</SwiperSlide>
        <SwiperSlide className='swiper4-slide'>Slide 4</SwiperSlide>
        <SwiperSlide className='swiper4-slide'>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default PersonalTeam
