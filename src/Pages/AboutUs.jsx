import React from 'react'
import WhoWeAre from '../Components/WhoWeAre/WhoWeAre'
import AboutHeader from '../Components/AboutHeader/AboutHeader'
import Counter from '../Components/Counter/Counter'
import PersonalTeam from '../Components/PersonalTeam/PersonalTeam'
import ScrollToTop from 'react-scroll-to-top'

const AboutUs = () => {
  return (
    <div>
      <AboutHeader heading1 = "ABOUT US" heading2 = "HOME / COMPANY / ABOUT US" />
      <WhoWeAre/>
      <Counter/>
      <PersonalTeam/>
      <ScrollToTop style={{backgroundColor:"#ffb600",height:"50px",width:"50px"}} smooth/>
    </div>
  )
}

export default AboutUs
