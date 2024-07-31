import React from 'react'
import AboutHeader from '../Components/AboutHeader/AboutHeader'
import ServicesBody from '../Components/ServicesBody/ServicesBody'
import ScrollToTop from 'react-scroll-to-top'

const Services = () => {
  return (
    <div>
      <AboutHeader heading1 = "SERVICE" heading2 = "HOME / COMPANY / SERVICES" />
      <ServicesBody/>
      <ScrollToTop style={{backgroundColor:"#ffb600",height:"50px",width:"50px"}} smooth/>
    </div>
  )
}

export default Services
