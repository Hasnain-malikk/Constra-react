import React from 'react'
import "./Error404.css"

const Error404 = () => {
  return (
    <div className='error-404'>
      <div className="error-main1">404</div>
      <div className="error-main2">OOPS... PAGE NOT FOUND!</div>
      <div className="error-main3">Try using the button below to go to main page of the site</div>
      <div className="error-main4">
        <button>BACK TO HOME PAGE</button>
      </div>
    </div>
  )
}

export default Error404
