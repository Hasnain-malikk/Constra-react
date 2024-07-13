import React from 'react'
import "./HeaderTop.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';


const HeaderTop = () => {
  return (
    <div className='header-top'>
      <div className="address">
      <FontAwesomeIcon icon={faLocationDot} style={{margin:"10px",fontSize:"18px"}}/>
      <div>9051 Constra Incorporate, USA</div>
      </div>
      <div className="social">
        <a href="https://web.facebook.com/malik.husnain.1612/" target='_blank'><FontAwesomeIcon icon={faFacebookF} style={{margin:"15px" }}/></a>
        <a href="#" target='_blank'><FontAwesomeIcon icon={faTwitter} style={{margin:"15px"}}/></a>
        <a href="https://www.instagram.com/malikhasnaindev/" target='_blank'><FontAwesomeIcon icon={faInstagram} style={{margin:"15px"}}/></a>
        <a href="https://github.com/Hasnain-malikk" target='_blank'><FontAwesomeIcon icon={faGithub} style={{margin:"15px"}}/></a>
      </div>
    </div>
  )
}

export default HeaderTop
