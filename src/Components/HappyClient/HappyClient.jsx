import React from 'react'
import "./HappyClient.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import p1 from "/ReactJs/constra-react/src/assets/testimonial-1.png"
import p2 from "/ReactJs/constra-react/src/assets/testimonial-2.png"
import p3 from "/ReactJs/constra-react/src/assets/testimonial-3.png"
import { Pagination } from 'swiper/modules';
import c1 from "/ReactJs/constra-react/src/assets/happy-client-1.png"
import c2 from "/ReactJs/constra-react/src/assets/happy-client-2.png"
import c3 from "/ReactJs/constra-react/src/assets/happy-client-3.png"
import c4 from "/ReactJs/constra-react/src/assets/happy-client-4.png"
import c5 from "/ReactJs/constra-react/src/assets/happy-client-5.png"
import c6 from "/ReactJs/constra-react/src/assets/happy-client-6.png"

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
                 speed={800}
                 loop={true}
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
                 <SwiperSlide className='slidee'>
                 <div className="testimonialIcon">
                         <FontAwesomeIcon icon={faQuoteLeft} />
                    </div>
                    <div className="testimonialMain"> 
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci done idunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitoa tion ullamco laboris
                      nisi aliquip consequat.
                    
                      <div className="person">
                        <div className="person-img">
                            <img src={p2} alt="" />
                        </div>
                        <div className="person-text">
                            <div className='person-text-heading'>WELDON CASH</div>
                            <div className="person-text-name">CFO, First Choice</div>
                        </div>
                      </div>
                      </div>
                 </SwiperSlide>
                 <SwiperSlide className='slidee'>
                 <div className="testimonialIcon">
                         <FontAwesomeIcon icon={faQuoteLeft} />
                    </div>
                    <div className="testimonialMain"> 
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci done idunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitoa tion ullamco laboris
                      nisi aliquip consequat.
                    
                      <div className="person">
                        <div className="person-img">
                            <img src={p3} alt="" />
                        </div>
                        <div className="person-text">
                            <div className='person-text-heading'>MINTER PUCHAN</div>
                            <div className="person-text-name">Director, ATK</div>
                        </div>
                      </div>
                      </div>
                 </SwiperSlide>
            </Swiper>
        </section>
      </div>
      <div className="client">
        <h1>HAPPY CLIENTS</h1>
        <div className="client-logo">
          <div className="logo1" id='l1' >
            <img src={c1} alt="" />
          </div>
          <div className="logo1" id='l2' >
            <img src={c2} alt="" />
          </div>
          <div className="logo1" id='l3' >
            <img src={c3} alt="" />
          </div>
          <div className="logo1" id='l4' >
            <img src={c4} alt="" />
          </div>
          <div className="logo1" id='l5' >
            <img src={c5} alt="" />
          </div>
          <div className="logo1" id='l6' >
            <img src={c6} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="happy-client-section-2">
      <div className="help">
        <div className="help1">CAN WE HELP?</div>
        <div className="help2">(+9) 847-291-4353</div>
      </div>
      <div className="newsletter">
        <div className="newsletter-1">
          <div className="newsletter-1-1">NEWSLETTER SIGN-UP</div>
          <div className="newsletter-1-2">Latest updates and news</div>
        </div>
        <div className="newsletter-2">
          <input placeholder='Enter Your Email and hit enter' type="text" name="" id="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default HappyClient
