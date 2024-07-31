import React from 'react'
import AboutHeader from '../Components/AboutHeader/AboutHeader'
import OurLeadership from '../Components/OurLeadership/OurLeadership'
import ScrollToTop from 'react-scroll-to-top'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

const OurPeople = () => {
  return (
    <div>
      <AboutHeader heading1="OUR TEAM" heading2="HOME / COMPANY / OUR TEAM"/>
      <OurLeadership/>
      <ScrollToTop style={{backgroundColor:"#252525",height:"36px",width:"36px",borderRadius:"4px"}} smooth component={<FontAwesomeIcon style={{color:"#ffb600",fontSize:"16px",fontWeight:"900"}} icon={faAnglesUp} />} />
    </div>
  )
}

export default OurPeople
