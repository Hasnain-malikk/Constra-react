import React from 'react'
import "./Counter.css"
import Count from './Count'

const Counter = () => {
  return (
    <div className='counter'>
      <Count/>
      <Count/>
      <Count/>
      <Count/>
    </div>
  )
}

export default Counter
