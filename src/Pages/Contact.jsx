import React from 'react'
import AboutHeader from '../Components/AboutHeader/AboutHeader'
import OurLocation from '../Components/OurLocation/OurLocation'
import ContactForm from '../Components/ContactForm/ContactForm'
import ScrollToTop from 'react-scroll-to-top'


const Contact = () => {
  return (
    <div>
      <AboutHeader heading1 = "CONTACT" heading2 = "HOME / COMPANY / CONTACT US" />
      <OurLocation/>
      <ContactForm/>
      <ScrollToTop style={{backgroundColor:"#ffb600",height:"50px",width:"50px"}} smooth/>
    </div>
  )
}

export default Contact
