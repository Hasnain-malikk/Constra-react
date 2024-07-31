import React from 'react'
import ProjectSingle from '../ProjectSingle/ProjectSingle'
import p6 from "/ReactJs/constra-react/src/assets/project6.jpg"

const Residential = () => {
  return (
    <div className='project-page-body'>
       <ProjectSingle bgimg="bg6"  name="ANCRAFT AVENUE HOUSE" type="Residential" img={p6}/>
    </div>
  )
}

export default Residential
