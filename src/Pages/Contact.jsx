import React from 'react'
import AboutHeader from '../Components/AboutHeader/AboutHeader'
import OurLocation from '../Components/OurLocation/OurLocation'
import ContactForm from '../Components/ContactForm/ContactForm'


const Contact = () => {
  return (
    <div>
      <AboutHeader heading1 = "CONTACT" heading2 = "HOME / COMPANY / CONTACT US" />
      <OurLocation/>
      <ContactForm/>
    </div>
  )
}

export default Contact
