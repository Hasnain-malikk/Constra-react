import React from 'react'
import "./HappyClient.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import p1 from "/ReactJs/constra-react/src/assets/testimonial-1.png"
import { Pagination } from 'swiper/modules';

const HappyClient = () => {
  return (
    <div className='happy-client'>
    <div className="happy-client-section-1">
      <div className="testi">
        <h1>TESTIMONIALS</h1>
        <section>
            <Swiper className='swip2'
                modules={[Pagination]}
                 spaceBetween={0}
                 slidesPerView={1}
                 pagination={{ clickable: true }}
                 onSlideChange={() => console.log('slide change')}
                 onSwiper={(swiper) => console.log(swiper)}
               >
                 <SwiperSlide className='slidee'>
                    <div className="testimonialIcon">
                         <FontAwesomeIcon icon={faQuoteLeft} />
                    </div>
                    <div className="testimonialMain"> Question ran over her cheek When she reached the first hills of the Italic Mountains, she had a last
                      view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the
                      subline of her own road.
                      <div className="person">
                        <div className="person-img">
                            <img src={p1} alt="" />
                        </div>
                        <div className="person-text">
                            <div className='person-text-heading'>GABRIEL DENIS</div>
                            <div className="person-text-name">Chairman, OKT</div>
                        </div>
                      </div>
                      </div>
                 </SwiperSlide>
                 <SwiperSlide>Slide 2</SwiperSlide>
                 <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </section>
      </div>
      <div className="client">clients</div>
    </div>
    <div className="happy-client-section-2">
      <div className="help">help</div>
      <div className="newsletter">newsletter</div>
    </div>
    </div>
  )
}

export default HappyClient
