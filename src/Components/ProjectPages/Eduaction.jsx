import React from 'react'
import ProjectSingle from '../ProjectSingle/ProjectSingle'
import p4 from "/ReactJs/constra-react/src/assets/project4.jpg"
import p5 from "/ReactJs/constra-react/src/assets/project5.jpg"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Eduaction = () => {
  return (
    <div className='project-page-body'>
      <ProjectSingle bgimg="bg4"  name="NARRIOT HEADQUARTERS" type="INFRASTRUCTURE" img={p4}/>
      <ProjectSingle bgimg="bg5"  name="KALAS METRORAIL" type="INFRASTRUCTURE" img={p5}/>
    </div>
  )
}

export default Eduaction
