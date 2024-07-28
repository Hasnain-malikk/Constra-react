import React from 'react'
import "./ServicesBody.css"
import ServiceMain from './ServiceMain'
import p1 from "/ReactJs/constra-react/src/assets/service1.jpg"
import p2 from "/ReactJs/constra-react/src/assets/service2.jpg"
import p3 from "/ReactJs/constra-react/src/assets/service3.jpg"
import p4 from "/ReactJs/constra-react/src/assets/service4.jpg"
import p5 from "/ReactJs/constra-react/src/assets/service5.jpg"
import p6 from "/ReactJs/constra-react/src/assets/service6.jpg"
import i1 from "/ReactJs/constra-react/src/assets/constra-1.png"
import i2 from "/ReactJs/constra-react/src/assets/constra-2.png"
import i3 from "/ReactJs/constra-react/src/assets/constra-3.png"
import i4 from "/ReactJs/constra-react/src/assets/constra-4.png"
import i5 from "/ReactJs/constra-react/src/assets/constra-5.png"
import i6 from "/ReactJs/constra-react/src/assets/constra-6.png"

const ServicesBody = () => {
  return (
    <div className='services-body'>
      <ServiceMain img={p1} icn={i1}  head="ZERO HARM EVERYDAY"  />
      <ServiceMain img={p2} icn={i2}  head="VIRTUAL CONSTRUCTION"  />
      <ServiceMain img={p3} icn={i3}  head="BUILD TO LAST"  />
      <ServiceMain img={p4} icn={i4}  head="EXTERIOR DESIGN"  />
      <ServiceMain img={p5} icn={i5}  head="RENOVATION"  />
      <ServiceMain img={p6} icn={i6}  head="SAFETY MANAGEMENT"  />
    </div>
  )
}

export default ServicesBody
