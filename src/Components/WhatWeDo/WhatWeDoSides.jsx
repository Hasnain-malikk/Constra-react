import React from 'react'
import "./WhatWeDoSides.css"
import WWD1 from './WWD1'

const WhatWeDoSides = ({heading1,heading2,heading3,pic1,pic2,pic3}) => {
  return (
    <div className='what-we-do-sides'>
      <WWD1 icon={pic1} heading={heading1} text="Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat" />
      <WWD1 icon={pic2} heading={heading2} text="Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat" />
      <WWD1 icon={pic3} heading={heading3} text="Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat" />
    </div>
  )
}

export default WhatWeDoSides
