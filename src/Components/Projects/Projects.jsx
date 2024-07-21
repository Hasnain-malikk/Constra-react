import React from 'react'
import "./Projects.css"
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='projects'>
      <div className="recent-projects">
        <div className="small-heading">WORK OF EXCELLENCE</div>
        <div className="main-heading">RECENT PROJECTS</div>
      </div>
      <div className="projects-nav">
        <Link to="/" className='project-link'>SHOW ALL</Link>
        <Link to="/commercial" className='project-link'>COMMERCIAL</Link>
        <Link to="/eduaction" className='project-link'>EDUACTION</Link>
        <Link to="/government" className='project-link'>GOVERNMENT</Link>
        <Link to="/infrastructure" className='project-link'>INFRASTRUCTURE</Link>
        <Link to="/residential" className='project-link'>RESIDENTIAL</Link>
        <Link to="/healthcare" className='project-link'>HEALTHCARE</Link>
      </div>
    </div>
  )
}

export default Projects
