import React from 'react'
import AboutHeader from '../Components/AboutHeader/AboutHeader'
import ServicesBody from '../Components/ServicesBody/ServicesBody'
import ScrollToTop from 'react-scroll-to-top'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div>
      <AboutHeader heading1 = "SERVICE" heading2 = "HOME / COMPANY / SERVICES" />
      <ServicesBody/>
      <ScrollToTop style={{backgroundColor:"#252525",height:"36px",width:"36px",borderRadius:"4px"}} smooth component={<FontAwesomeIcon style={{color:"#ffb600",fontSize:"16px",fontWeight:"900"}} icon={faAnglesUp} />} />
    </div>
  )
}

export default Services
