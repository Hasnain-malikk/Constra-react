import React from 'react'
import "./OurLocation.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const OurLocation = () => {
  return (
    <div className='our-location'>
        <div className="our-location-head">
      <div className="our-location-head1">REACHING OUR OFFICE</div>
      <div className="our-location-head2">FIND OUR LOCATION</div>
        </div>
        <div className="our-location-boxes">
            <div className="ol-box">
                <div className="ol-box-1">
                    <div className="fa-box">
                <FontAwesomeIcon className='font-a' icon={faLocationDot} />
                    </div>
                </div>
                <div className="ol-box-2">VISIT OUR OFFICE</div>
                <div className="ol-box-3">9051 Constra Incorporate, USA</div>
            </div>
            <div className="ol-box">
            <div className="ol-box-1">
                    <div className="fa-box">
                <FontAwesomeIcon className='font-a' icon={faEnvelope} />
                    </div>
                </div>
                <div className="ol-box-2">EMAIL US</div>
                <div className="ol-box-3">office@Constra.com</div>
            </div>
            <div className="ol-box">
            <div className="ol-box-1">
                    <div className="fa-box">
                <FontAwesomeIcon className='font-a' icon={faPhone} />
                    </div>
                </div>
                <div className="ol-box-2">CALL US</div>
                <div className="ol-box-3">(+9) 847-291-4353</div>
            </div>
        </div>
    </div>
  )
}

export default OurLocation
