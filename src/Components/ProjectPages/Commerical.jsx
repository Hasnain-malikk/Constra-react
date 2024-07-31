import React from 'react'
import ProjectSingle from '../ProjectSingle/ProjectSingle'
import p3 from "/ReactJs/constra-react/src/assets/project3.jpg"


const Commerical = () => {
  return (
    <div className='project-page-body'>
      <ProjectSingle bgimg="bg3"  name="TNT EAST FACILITY" type="GOVERNMENT" img={p3}/>
    </div>
  )
}

export default Commerical
