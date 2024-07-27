import React from 'react'
import "./PricingBody.css"
import PricingCard from './PricingCard'

const PricingBody = () => {
  return (
    <div className='pricing-body'>
      <div className="pricing-body-heading1">GRAB THE PACKAGES</div>
      <div className="pricing-body-heading2">PRICING</div>
      <div className="pricing-body-main">
        <PricingCard/>
      </div>
    </div>
  )
}

export default PricingBody
