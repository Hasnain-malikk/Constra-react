import React from 'react'
import "./OurLeadership.css"
import People from './People'

const OurLeadership = () => {
  return (
    <div className='our-leadership'>
      <div className="our-leadership-heading">OUR LEADERSHIPS</div>
      <div className="our-leadership-body">
        <People/>
      </div>
    </div>
  )
}

export default OurLeadership
