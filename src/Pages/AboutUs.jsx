import React from 'react'
import WhoWeAre from '../Components/WhoWeAre/WhoWeAre'
import AboutHeader from '../Components/AboutHeader/AboutHeader'
import Counter from '../Components/Counter/Counter'
import PersonalTeam from '../Components/PersonalTeam/PersonalTeam'

const AboutUs = () => {
  return (
    <div>
      <AboutHeader heading1 = "ABOUT US" heading2 = "HOME / COMPANY / ABOUT US" />
      <WhoWeAre/>
      <Counter/>
      <PersonalTeam/>
    </div>
  )
}

export default AboutUs
