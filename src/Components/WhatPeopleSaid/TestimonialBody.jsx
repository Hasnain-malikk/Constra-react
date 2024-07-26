import React from 'react'
import "./TestimonialBody.css"
import p1 from "/ReactJs/constra-react/src/assets/testimonial-1.png"

const TestimonialBody = () => {
  return (
    <div className='testimonial-body' >
      <div className="testimonial-body-text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</div>
      <div className="testimonial-body-person">
        <div className="testimonial-body-person-1">
            <div className="testimonial-body-person-1-1">
            <img src={p1} alt="" />
            </div>
        </div>
        <div className="testimonial-body-person-2"></div>
        <div className="testimonial-body-person-3"></div>
      </div>
    </div>
  )
}

export default TestimonialBody
