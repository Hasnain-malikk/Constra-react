import React from 'react'
import "./People.css"
import p1 from "/ReactJs/constra-react/src/assets/team1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const People = ({img,name,desc}) => {
  return (
    <div className='people'> 
      <div className="people-img">
        <img src={img} alt="" />
      </div>
      <div className="people-body">
        <div className="people-body-1">{name}</div>
        <div className="people-body-2">{desc}</div>
        <div className="people-body-3">Nats Stenman began his career in construction with boots on the ground</div>
        <div className="people-body-4">
                <FontAwesomeIcon className='pt-icon dark' icon={faFacebookF} />
                <FontAwesomeIcon className='pt-icon dark' icon={faTwitter} />
                <FontAwesomeIcon className='pt-icon dark' icon={faGooglePlus} />
                <FontAwesomeIcon className='pt-icon dark' icon={faLinkedin} />
        </div>
      </div>
    </div>
  )
}

export default People
