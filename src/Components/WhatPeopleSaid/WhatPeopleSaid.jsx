import React from 'react'
import "./WhatPeopleSaid.css"
import TestimonialBody from './TestimonialBody'

const WhatPeopleSaid = () => {
  return (
    <div className='people-said'>
      <div className="our-leadership-heading">WHAT PEOPLE SAID</div>
      <div className="people-said-main">
        <TestimonialBody/>
      </div>
    </div>
  )
}

export default WhatPeopleSaid
