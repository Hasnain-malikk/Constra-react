import React from 'react'
import "./WhoWeAre.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade,Navigation,Autoplay} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const WhoWeAre = () => {
  return (
    <div className='who-we-are'>
      <div className="who-we-are-1">
        <div className="who-we-are-head-1">WHO WE ARE</div>
        <div className="who-we-are-para1">when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.</div>
        <div className="who-we-are-para2">
          <div className="icn">
          <FontAwesomeIcon icon={faQuoteLeft} />
          </div>
          <div className="who-we-are-quote">Semporibus autem quibusdam et aut officiis debitis aut rerum est aut optio cumque nihil necessitatibus autemn ec tincidunt nunc posuere ut</div>
        </div>
        <div className="who-we-are-para3">He lay on his armour-like back, and if he lifted. ultrices ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing.</div>
      </div>
      <div className="who-we-are-2">
      <Swiper className='swiper3'
      modules={[EffectFade,Navigation,Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      effect={'fade'}
      loop={true}
      speed={800}
      autoplay={{
        delay: 3500,
        disableOnInteraction: true,
      }}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='who-we-are-slide-1'>
        <h1>LEADERSHIP</h1>
      </SwiperSlide>
      <SwiperSlide className='who-we-are-slide-3'>
        <h1>RELATIONSHIPS</h1>
      </SwiperSlide>
      <SwiperSlide className='who-we-are-slide-2'>
        <h1>PERFORMANCE</h1>
      </SwiperSlide>
    </Swiper>
      </div>
    </div>
  )
}

export default WhoWeAre
