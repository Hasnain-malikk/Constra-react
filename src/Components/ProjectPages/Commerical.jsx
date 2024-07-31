import React from 'react'
import ProjectSingle from '../ProjectSingle/ProjectSingle'
import p3 from "/ReactJs/constra-react/src/assets/project3.jpg"
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';


const Commerical = () => {

  // useGSAP(()=>{
  //   gsap.from('.project-single',{
  //     x:700,
  //     duration:0.3,
  //     delay:0.1
  //   })
  // })

  return (
    <div className='project-page-body pc'>
      <ProjectSingle bgimg="bg3"  name="TNT EAST FACILITY" type="GOVERNMENT" img={p3}/>
    </div>
  )
}

export default Commerical
