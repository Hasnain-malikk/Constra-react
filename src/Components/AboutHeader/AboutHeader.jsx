import React from 'react'
import "./AboutHeader.css"

const AboutHeader = ({heading1,heading2}) => {
  return (
    <div className='about-header' >
      <div className="about-heading">{heading1}</div>
      <div className="about-breadcrum">{heading2}</div>
    </div>
  )
}

export default AboutHeader
