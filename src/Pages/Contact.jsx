import React from 'react'
import AboutHeader from '../Components/AboutHeader/AboutHeader'
import OurLocation from '../Components/OurLocation/OurLocation'
import ContactForm from '../Components/ContactForm/ContactForm'
import ScrollToTop from 'react-scroll-to-top'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  return (
    <div>
      <AboutHeader heading1 = "CONTACT" heading2 = "HOME / COMPANY / CONTACT US" />
      <OurLocation/>
      <ContactForm/>
      <ScrollToTop style={{backgroundColor:"#252525",height:"36px",width:"36px",borderRadius:"4px"}} smooth component={<FontAwesomeIcon style={{color:"#ffb600",fontSize:"16px",fontWeight:"900"}} icon={faAnglesUp} />} />
    </div>
  )
}

export default Contact
