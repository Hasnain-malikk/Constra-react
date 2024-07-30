import React from 'react'
import { Link } from "react-router-dom"
import "./ProjectBody.css"

const ProjectBody = () => {
  return (
    <div className='project-body'>
      <div className="project-bar">
        <Link className="p-link" to='showall' >SHOW ALL</Link>
        <Link className="p-link" to='commercial' >COMMERCIAL</Link>
        <Link className="p-link" to='education' >EDUCATION</Link>
        <Link className="p-link" to='government' >GOVERNMENT</Link>
        <Link className="p-link" to='infrastructure' >INFRASTRUCTURE</Link>
        <Link className="p-link" to='residential' >RESIDENTIAL</Link>
        <Link className="p-link" to='healthcare' >HEALTHCARE</Link>
      </div>
    </div>
  )
}

export default ProjectBody
