import React from 'react'
import "./Counter.css"
import Count from './Count'
import count1 from "/ReactJs/constra-react/src/assets/counter-house.png"
import count2 from "/ReactJs/constra-react/src/assets/counter-person.png"
import count3 from "/ReactJs/constra-react/src/assets/counter-clock.png"
import count4 from "/ReactJs/constra-react/src/assets/counter-globe.png"

const Counter = () => {
  return (
    <div className='counter'>
      <Count icon={count1} number="1789" text="TOTAL PROJECTS"/>
      <Count icon={count2} number="647" text="STAFF MEMBERS"/>
      <Count icon={count3} number="4000" text="HOURS OF WORK"/>
      <Count icon={count4} number="44" text="COUNTRIES EXPERIENCE"/>
    </div>
  )
}

export default Counter
