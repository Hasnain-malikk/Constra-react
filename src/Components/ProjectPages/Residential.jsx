import React from 'react'
import ProjectSingle from '../ProjectSingle/ProjectSingle'
import p6 from "/ReactJs/constra-react/src/assets/project6.jpg"
// import { useGSAP } from '@gsap/react';
// import gsap from 'gsap';

const Residential = () => {

  // useGSAP(()=>{
  //   gsap.from('.pr',{
  //     x:700,
  //     duration:0.35,
  //     delay:0.3,
  //   })
  // })

  return (
    <div className='project-page-body pr'>
       <ProjectSingle bgimg="bg6"  name="ANCRAFT AVENUE HOUSE" type="Residential" img={p6}/>
    </div>
  )
}

export default Residential
