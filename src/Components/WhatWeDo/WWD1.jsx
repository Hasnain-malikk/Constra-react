import React from 'react'
import "./WWD1.css"

const WWD1 = ({icon,heading,text}) => {
  return (
    <div className='wwd1'>
      <div className="wwd1-left">
        <img src={icon} alt="" />
      </div>
      <div className="wwd1-right">
        <div className="wwd1-head">{heading}</div>
        <div className="wwd1-text">{text}</div>
      </div>
    </div>
  )
}

export default WWD1
