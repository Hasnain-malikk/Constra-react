import React from 'react'
import "./ServiceMain.css"
import WWD1 from '../WhatWeDo/WWD1'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const ServiceMain = ({icn,head,img}) => {
  return (
    <div className='service-main'>
      <div className="service-img">
        <img src={img} alt="" />
      </div>
      <WWD1 icon={icn} heading={head} text="You have ideas, goals, and dreams. We have a culturally diverse, forward thinking team looking for talent like. Lorem ipsum dolor suscipit." />
      <div className="service-main-link">
      <FontAwesomeIcon icon={faCaretRight} />
      &nbsp;LEARN MORE
      </div>
    </div>
  )
}

export default ServiceMain
