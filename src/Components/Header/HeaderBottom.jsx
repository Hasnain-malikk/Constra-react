import React from 'react'
import "./HeaderBottom.css"
import logo from "/ReactJs/constra-react/src/assets/header-logo.png"

const HeaderBottom = () => {
  return (
    <div className='header-bottom'>
      <div className="header-logo"><img src={logo} alt="" /></div>
      <div className="header-content">
        <div className="box">
          <div className="header-bottom-head">Call Us</div>
          <div className="header-bottom-main">(+9) 847-291-4353</div>
        </div>
        <div className="box" id='box'>
          <div className="header-bottom-head" id='border'>Email Us</div>
          <div className="header-bottom-main" id='border'>office@Constra.com</div>
        </div>
        <div className="box" >
          <div className="header-bottom-head" id='bx3'>Global Certificate</div>
          <div className="header-bottom-main" id='bx3'>ISO 9001:2017</div>
        </div>
        <div className="box btn">
          <button>Get A Quote</button>
        </div>
      </div>
    </div>
  )
}

export default HeaderBottom
