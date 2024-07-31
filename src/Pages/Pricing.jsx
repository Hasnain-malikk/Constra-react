import React from 'react'
import AboutHeader from '../Components/AboutHeader/AboutHeader'
import PricingBody from '../Components/PricingBody/PricingBody'
import ScrollToTop from 'react-scroll-to-top'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {
  return (
    <div>
      <AboutHeader heading1 = "PRICING" heading2 = "HOME / COMPANY / PRICING" />
      <PricingBody/>
      <ScrollToTop style={{backgroundColor:"#252525",height:"40px",width:"36px",borderRadius:"4px"}} smooth component={<FontAwesomeIcon style={{color:"#ffb600",fontSize:"16px",fontWeight:"900"}} icon={faAnglesUp} />} />
    </div>
  )
}

export default Pricing
