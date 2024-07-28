import React from 'react'
import "./PricingBody.css"
import PricingCard from './PricingCard'

const PricingBody = () => {
  return (
    <div className='pricing-body'>
      <div className="pricing-body-heading1">GRAB THE PACKAGES</div>
      <div className="pricing-body-heading2">PRICING</div>
      <div className="pricing-body-main">
        <PricingCard heading="BUILDING REMODELS" price="$89.9" />
        <PricingCard orange="newclr" heading="RENOVATION" price="$179.9" />
        <PricingCard heading="HOME CONSTRUCTION" price="$279.9" />
      </div>
    </div>
  )
}

export default PricingBody
