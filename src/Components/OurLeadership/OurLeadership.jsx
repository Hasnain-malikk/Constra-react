import React from 'react'
import "./OurLeadership.css"
import People from './People'
import p1 from "/ReactJs/constra-react/src/assets/team1.jpg"
import p2 from "/ReactJs/constra-react/src/assets/team2.jpg"
import p3 from "/ReactJs/constra-react/src/assets/team3.jpg"
import p4 from "/ReactJs/constra-react/src/assets/team4.jpg"
import p5 from "/ReactJs/constra-react/src/assets/team5.jpg"
import p6 from "/ReactJs/constra-react/src/assets/team6.jpg"
import p7 from "/ReactJs/constra-react/src/assets/team7.jpg"
import p8 from "/ReactJs/constra-react/src/assets/team8.jpg"

const OurLeadership = () => {
  return (
    <div className='our-leadership'>
      <div className="our-leadership-heading">OUR LEADERSHIPS</div>
      <div className="our-leadership-body">
        <People img={p1} name="NATS STENMAN" desc="Chief Operating Officer" />
        <People img={p2} name="ANGELA LYOUER" desc="Innovation Officer" />
        <People img={p3} name="MARK CONTER" desc="Safety Officer" />
        <People img={p4} name="AYESHA STEWART" desc="Finance Officer" />
        <People img={p8} name="JHON SNOW" desc="Site Engineer" />
        <People img={p5} name="DAVE CLARKTE" desc="Civil Engineer" />
        <People img={p6} name="ELTON JOE" desc="Site Supervisor" />
        <People img={p7} name="DANERYAS TARGARYEIN" desc="Project Manager" />
      </div>
    </div>
  )
}

export default OurLeadership
