import React from 'react'
import AboutHeader from '../Components/AboutHeader/AboutHeader'
import OurLeadership from '../Components/OurLeadership/OurLeadership'
import ScrollToTop from 'react-scroll-to-top'

const OurPeople = () => {
  return (
    <div>
      <AboutHeader heading1="OUR TEAM" heading2="HOME / COMPANY / OUR TEAM"/>
      <OurLeadership/>
      <ScrollToTop style={{backgroundColor:"#ffb600",height:"50px",width:"50px"}} smooth/>
    </div>
  )
}

export default OurPeople
