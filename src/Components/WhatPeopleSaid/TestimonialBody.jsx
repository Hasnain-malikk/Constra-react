import React from 'react'
import "./TestimonialBody.css"


const TestimonialBody = ({img,name,desc}) => {
  return (
    <div className='testimonial-body' >
      <div className="testimonial-body-text">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.</div>
      <div className="angel-down"></div>
      <div className="testimonial-body-person">
        <div className="testimonial-body-person-1">
            <div className="testimonial-body-person-1-1">
            <img src={img} alt="" />
            </div>
        </div>
        <div className="testimonial-body-person-2">{name}</div>
        <div className="testimonial-body-person-3">{desc}</div>
      </div>
    </div>
  )
}

export default TestimonialBody
