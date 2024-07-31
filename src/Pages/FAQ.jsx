import React from 'react'
import AboutHeader from '../Components/AboutHeader/AboutHeader'
import FaqBody from '../Components/FaqBody/FaqBody'
import ScrollToTop from 'react-scroll-to-top'

const FAQ = () => {
  return (
    <div>
      <AboutHeader heading1 = "FAQ" heading2 = "HOME / COMPANY / FAQ" />
      <FaqBody/>
      <ScrollToTop style={{backgroundColor:"#ffb600",height:"50px",width:"50px"}} smooth/>
    </div>
  )
}

export default FAQ
