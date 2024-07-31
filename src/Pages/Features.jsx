import React from 'react'
import AboutHeader from '../Components/AboutHeader/AboutHeader'
import Error404 from '../Components/Error404/Error404'
import ScrollToTop from 'react-scroll-to-top'

const Features = () => {
  return (
    <div>
      <AboutHeader heading1 = "FEATURES" heading2 = "HOME / COMPANY / 404" />
      <Error404/>
      <ScrollToTop style={{backgroundColor:"#ffb600",height:"50px",width:"50px"}} smooth/>
    </div>
  )
}

export default Features
