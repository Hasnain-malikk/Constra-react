import React from 'react'
import AboutHeader from '../Components/AboutHeader/AboutHeader'
import Error404 from '../Components/Error404/Error404'
import ScrollToTop from 'react-scroll-to-top'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <div>
      <AboutHeader heading1 = "FEATURES" heading2 = "HOME / COMPANY / 404" />
      <Error404/>
      <ScrollToTop style={{backgroundColor:"#252525",height:"36px",width:"36px",borderRadius:"4px"}} smooth component={<FontAwesomeIcon style={{color:"#ffb600",fontSize:"16px",fontWeight:"900"}} icon={faAnglesUp} />} />
    </div>
  )
}

export default Features
