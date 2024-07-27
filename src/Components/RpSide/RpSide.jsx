import React from 'react'
import "./RpSide.css"
import p1 from "/ReactJs/constra-react/src/assets/recent-post-1.jpg"
import p2 from "/ReactJs/constra-react/src/assets/recent-post-2.jpg"
import p3 from "/ReactJs/constra-react/src/assets/recent-post-3.jpg"

const RpSide = () => {
  return (
    <div className='rp-side'>
      <div className="rp-side1">RECENT POST</div>
      <div className="rp-side2">
        <div className="rp-content bdrrr">
            <div className="rp-content-img">
                <img src={p1} alt="" />
            </div>
            <div className="rp-content-text">
            WE JUST COMPLETES $17.6 MILLION MEDICAL CLINIC IN MID-MISSOURI</div>
        </div>
        <div className="rp-content bdrrr">
            <div className="rp-content-img">
                <img src={p2} alt="" />
            </div>
            <div className="rp-content-text">
            THANDLER AIRPORT WATER RECLAMATION FACILITY EXPANSION PROJECT NAMED</div>
        </div>
        <div className="rp-content">
            <div className="rp-content-img">
                <img src={p3} alt="" />
            </div>
            <div className="rp-content-text">
            SILICON BENCH AND CORNIKE BEGIN CONSTRUCTION SOLAR FACILITIES</div>
        </div>
        
      </div>
    </div>
  )
}

export default RpSide
