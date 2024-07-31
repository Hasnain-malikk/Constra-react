import React from 'react'
import WhoWeAre from '../Components/WhoWeAre/WhoWeAre'
import AboutHeader from '../Components/AboutHeader/AboutHeader'
import Counter from '../Components/Counter/Counter'
import PersonalTeam from '../Components/PersonalTeam/PersonalTeam'
import ScrollToTop from 'react-scroll-to-top'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

const AboutUs = () => {
  return (
    <div>
      <AboutHeader heading1 = "ABOUT US" heading2 = "HOME / COMPANY / ABOUT US" />
      <WhoWeAre/>
      <Counter/>
      <PersonalTeam/>
      <ScrollToTop style={{backgroundColor:"#252525",height:"36px",width:"36px",borderRadius:"4px"}} smooth component={<FontAwesomeIcon style={{color:"#ffb600",fontSize:"16px",fontWeight:"900"}} icon={faAnglesUp} />} />
    </div>
  )
}

export default AboutUs
