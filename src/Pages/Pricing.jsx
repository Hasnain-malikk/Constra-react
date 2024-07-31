import React from 'react'
import AboutHeader from '../Components/AboutHeader/AboutHeader'
import PricingBody from '../Components/PricingBody/PricingBody'
import ScrollToTop from 'react-scroll-to-top'

const Pricing = () => {
  return (
    <div>
      <AboutHeader heading1 = "PRICING" heading2 = "HOME / COMPANY / PRICING" />
      <PricingBody/>
      <ScrollToTop style={{backgroundColor:"#ffb600",height:"50px",width:"50px"}} smooth />
    </div>
  )
}

export default Pricing
