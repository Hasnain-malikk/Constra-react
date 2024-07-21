import React from 'react'
import "./WhatWeDo.css"
import WhatWeDoSides from './WhatWeDoSides'
import men from "/ReactJs/constra-react/src/assets/men.jpg"
import p1 from "/ReactJs/constra-react/src/assets/constra-1.png"
import p2 from "/ReactJs/constra-react/src/assets/constra-2.png"
import p3 from "/ReactJs/constra-react/src/assets/constra-3.png"
import p4 from "/ReactJs/constra-react/src/assets/constra-4.png"
import p5 from "/ReactJs/constra-react/src/assets/constra-5.png"
import p6 from "/ReactJs/constra-react/src/assets/constra-6.png"

const WhatWeDo = () => {
  return (
    <div className='what-we-do'>
         <div className="what-we-do-header">
             <div className="text1">WE ARE SPECIALISTS IN</div>
             <div className="head1">WHAT WE DO</div>
         </div>
         <div className="what-we-do-body">
            <div className="what-we-do-block1">
                <WhatWeDoSides pic1={p1} pic2={p2} pic3={p3} heading1="HOME CONSTRUCTION" heading2="BUILDING REMODELS" heading3="INTERIOR DESIGN"/>
            </div>
            <div className="what-we-do-block2">
                <img src={men} alt="" />
            </div>
            <div className="what-we-do-block3">
            <WhatWeDoSides pic1={p4} pic2={p5} pic3={p6} heading1="EXTERIOR DESIGN" heading2="RENOVATION" heading3="SAFETY MANAGEMENT"/>
            </div>
         </div>   
    </div>
  )
}

export default WhatWeDo
