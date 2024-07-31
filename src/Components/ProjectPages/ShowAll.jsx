import React from 'react'
import ProjectSingle from '../ProjectSingle/ProjectSingle'
import p1 from "/ReactJs/constra-react/src/assets/project1.jpg"
import p2 from "/ReactJs/constra-react/src/assets/project2.jpg"
import p3 from "/ReactJs/constra-react/src/assets/project3.jpg"
import p4 from "/ReactJs/constra-react/src/assets/project4.jpg"
import p5 from "/ReactJs/constra-react/src/assets/project5.jpg"
import p6 from "/ReactJs/constra-react/src/assets/project6.jpg"

const ShowAll = () => {
  return (
    <div className='project-page-body'>
      <ProjectSingle bgimg="bg1"  name="CAPITAL TELTWAY BUILDING" type="COMMERCIAL INTERIORS" img={p1}/>
      <ProjectSingle bgimg="bg2"  name="GHUM TOUCH HOSPITAL" type="HEALTHCARE" img={p2}/>
      <ProjectSingle bgimg="bg3"  name="TNT EAST FACILITY" type="GOVERNMENT" img={p3}/>
      <ProjectSingle bgimg="bg4"  name="NARRIOT HEADQUARTERS" type="INFRASTRUCTURE" img={p4}/>
      <ProjectSingle bgimg="bg5"  name="KALAS METRORAIL" type="INFRASTRUCTURE" img={p5}/>
      <ProjectSingle bgimg="bg6"  name="ANCRAFT AVENUE HOUSE" type="Residential" img={p6}/>
    </div>
  )
}

export default ShowAll
