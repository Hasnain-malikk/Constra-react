import React from 'react'
import "./PersonalTeam.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


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
        breakpoints={{
            0: {
              slidesPerView: 1,
            },
            500: {
              slidesPerView: 1,
            },
            501: {
              slidesPerView: 4,
            }
          }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide id='pt-s1' className='swiper4-slide'>
        <div className="pt-content">
            <div className="pt-content-1">NATS STENMAN</div>
            <div className="pt-content-2">Chief Operating Officer</div>
            <div className="pt-content-3">Nats Stenman began his career in construction with boots on the ground</div>
            <div className="pt-content-4">
                <FontAwesomeIcon className='pt-icon' icon={faFacebookF} />
                <FontAwesomeIcon className='pt-icon' icon={faTwitter} />
                <FontAwesomeIcon className='pt-icon' icon={faGooglePlus} />
                <FontAwesomeIcon className='pt-icon' icon={faLinkedin} />
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide id='pt-s2' className='swiper4-slide'>
        <div className="pt-content">
            <div className="pt-content-1">ANGELA LYOUER</div>
            <div className="pt-content-2">Innovation Officer</div>
            <div className="pt-content-3">Nats Stenman began his career in construction with boots on the ground</div>
            <div className="pt-content-4">
                <FontAwesomeIcon className='pt-icon' icon={faFacebookF} />
                <FontAwesomeIcon className='pt-icon' icon={faTwitter} />
                <FontAwesomeIcon className='pt-icon' icon={faGooglePlus} />
                <FontAwesomeIcon className='pt-icon' icon={faLinkedin} />
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide id='pt-s3' className='swiper4-slide'>
            <div className="pt-content">
            <div className="pt-content-1">MARK CONTER</div>
            <div className="pt-content-2">Safety Officer</div>
            <div className="pt-content-3">Nats Stenman began his career in construction with boots on the ground</div>
            <div className="pt-content-4">
                <FontAwesomeIcon className='pt-icon' icon={faFacebookF} />
                <FontAwesomeIcon className='pt-icon' icon={faTwitter} />
                <FontAwesomeIcon className='pt-icon' icon={faGooglePlus} />
                <FontAwesomeIcon className='pt-icon' icon={faLinkedin} />
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide id='pt-s4' className='swiper4-slide'>
        <div className="pt-content">
            <div className="pt-content-1">AYESHA STEWART</div>
            <div className="pt-content-2">Finance Officer</div>
            <div className="pt-content-3">Nats Stenman began his career in construction with boots on the ground</div>
            <div className="pt-content-4">
                <FontAwesomeIcon className='pt-icon' icon={faFacebookF} />
                <FontAwesomeIcon className='pt-icon' icon={faTwitter} />
                <FontAwesomeIcon className='pt-icon' icon={faGooglePlus} />
                <FontAwesomeIcon className='pt-icon' icon={faLinkedin} />
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide id='pt-s5' className='swiper4-slide'>
        <div className="pt-content">
            <div className="pt-content-1">DAVE CLARKTE</div>
            <div className="pt-content-2">Civil Engineer</div>
            <div className="pt-content-3">Nats Stenman began his career in construction with boots on the ground</div>
            <div className="pt-content-4">
                <FontAwesomeIcon className='pt-icon' icon={faFacebookF} />
                <FontAwesomeIcon className='pt-icon' icon={faTwitter} />
                <FontAwesomeIcon className='pt-icon' icon={faGooglePlus} />
                <FontAwesomeIcon className='pt-icon' icon={faLinkedin} />
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide id='pt-s6' className='swiper4-slide'>
        <div className="pt-content">
            <div className="pt-content-1">ELTON JOE</div>
            <div className="pt-content-2">Site Supervisor</div>
            <div className="pt-content-3">Nats Stenman began his career in construction with boots on the ground</div>
            <div className="pt-content-4">
                <FontAwesomeIcon className='pt-icon' icon={faFacebookF} />
                <FontAwesomeIcon className='pt-icon' icon={faTwitter} />
                <FontAwesomeIcon className='pt-icon' icon={faGooglePlus} />
                <FontAwesomeIcon className='pt-icon' icon={faLinkedin} />
            </div>
            </div>
        </SwiperSlide>
        

        </Swiper>
      </div>
    </div>
  )
}

export default PersonalTeam
