import React from 'react'
import ProjectSingle from '../ProjectSingle/ProjectSingle'
import p3 from "/ReactJs/constra-react/src/assets/project3.jpg"
import p4 from "/ReactJs/constra-react/src/assets/project4.jpg"
import p5 from "/ReactJs/constra-react/src/assets/project5.jpg"


const Infrastructure = () => {
  return (
    <div className='project-page-body'>
      <ProjectSingle bgimg="bg3"  name="TNT EAST FACILITY" type="GOVERNMENT" img={p3}/>
      <ProjectSingle bgimg="bg4"  name="NARRIOT HEADQUARTERS" type="INFRASTRUCTURE" img={p4}/>
      <ProjectSingle bgimg="bg5"  name="KALAS METRORAIL" type="INFRASTRUCTURE" img={p5}/>
    </div>
  )
}

export default Infrastructure
