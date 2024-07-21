import React from 'react'
import SwiperCarousel from '../Components/SwiperCarousel/SwiperCarousel'
import Section2 from '../Components/Section2/Section2'
import Counter from '../Components/Counter/Counter'
import WhatWeDo from '../Components/WhatWeDo/WhatWeDo'
import Projects from '../Components/Projects/Projects'


const Home = () => {
  return (
    <div>
      <SwiperCarousel/>
      <Section2/>
      <Counter/>
      <WhatWeDo/>
      <Projects/>
    </div>
  )
}

export default Home
