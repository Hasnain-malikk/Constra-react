import React from 'react'
import AboutHeader from '../Components/AboutHeader/AboutHeader'
import WhatPeopleSaid from '../Components/WhatPeopleSaid/WhatPeopleSaid'
import ScrollToTop from 'react-scroll-to-top'

const Testimonials = () => {
  return (
    <div>
      <AboutHeader heading1 = "TESTIMONIALS" heading2 = "HOME / COMPANY / TESTIMONIAL" />
      <WhatPeopleSaid/>
      <ScrollToTop style={{backgroundColor:"#ffb600",height:"50px",width:"50px"}} smooth/>
    </div>
  )
}

export default Testimonials
