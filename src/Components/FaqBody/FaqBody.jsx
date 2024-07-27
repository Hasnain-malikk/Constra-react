import React from 'react'
import "./FaqBody.css"
import FaqAccordian from '../FaqAccordian/FaqAccordian'
import RpSide from '../RpSide/RpSide'

const FaqBody = () => {
  return (
    <div className='faq-body'>
      <FaqAccordian/>
      <RpSide/>
    </div>
  )
}

export default FaqBody
