import React from 'react'
import ProjectSingle from '../ProjectSingle/ProjectSingle'
import p1 from "/ReactJs/constra-react/src/assets/project1.jpg"
import p2 from "/ReactJs/constra-react/src/assets/project2.jpg"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Healthcare = () => {
  return (
    <div className='project-page-body'>
      <ProjectSingle bgimg="bg1"  name="CAPITAL TELTWAY BUILDING" type="COMMERCIAL INTERIORS" img={p1}/>
      <ProjectSingle bgimg="bg2"  name="GHUM TOUCH HOSPITAL" type="HEALTHCARE" img={p2}/>
    </div>
  )
}

export default Healthcare
