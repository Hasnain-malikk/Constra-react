import React from 'react'
import "./WhatPeopleSaid.css"
import TestimonialBody from './TestimonialBody'
import p1 from "/ReactJs/constra-react/src/assets/testimonial-1.png"
import p2 from "/ReactJs/constra-react/src/assets/testimonial-2.png"
import p3 from "/ReactJs/constra-react/src/assets/testimonial-3.png"

const WhatPeopleSaid = () => {
  return (
    <div className='people-said'>
      <div className="our-leadership-heading">WHAT PEOPLE SAID</div>
      <div className="people-said-main">
        <TestimonialBody img={p1} name="GABRIEL DENIS" desc="Chairman, Okt Industries"   />
        <TestimonialBody img={p2} name="WELDON CASH" desc="CEO, First Choice Group"   />
        <TestimonialBody img={p3} name="HYRAM IZZY" desc="Director, AKT Group"   />

      </div>
    </div>
  )
}

export default WhatPeopleSaid
