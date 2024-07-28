import React from 'react'
import "./PricingCard.css"

const PricingCard = ({orange,heading,price}) => {
  return (
    <div className='pricing-card'>
      <div className={`pricing-card-head ${orange}`}>
        <div className="pricing-card-head-1">{heading}</div>
        <div className="pricing-card-head-2">{price}</div>
        <div className="pricing-card-head-3">/MONTH</div>
      </div>
      <div className="pricing-card-main">
      <div className="pricing-card-main-1">Project Management for Owners</div>
      <div className="pricing-card-main-1">Pre-construction feasibility</div>
      <div className="pricing-card-main-1">On-site representation</div>
      <div className="pricing-card-main-1">Quality control inspections</div>
      <div className="pricing-card-main-1">Schedule claim preparation/defense</div>
      <div className="pricing-card-main-1">Project phasing development</div>
      </div>
      <div className="pricing-card-btn">
        <button className={`pricing-main-button ${orange}`} >ORDER NOW</button>
      </div>
    </div>
  )
}

export default PricingCard
