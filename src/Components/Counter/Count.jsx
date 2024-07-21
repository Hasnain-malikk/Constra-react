import React from 'react'
import "./Count.css"
import count1 from "/ReactJs/constra-react/src/assets/counter-house.png"

const Count = () => {
  return (
    <div className='count'>
      <div className="count-icon">
        <img src={count1} alt="" />
      </div>
      <div className="count-up">1786</div>
      <div className="count-text">TOTAL PROJECTS</div>
    </div>
  )
}

export default Count
