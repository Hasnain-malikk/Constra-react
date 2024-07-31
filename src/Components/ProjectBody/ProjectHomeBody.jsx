import React from 'react'
import "./ProjectHomeBody.css"
import { Link, useLocation } from "react-router-dom";

const ProjectHomeBody = () => {

    const location = useLocation();

  return (
    <div className='project-body'>
      <div className="project-bar">
        <Link 
          className={`p-link ${location.pathname === '/showall' ? 'active' : ''}`} 
          to='showall'
        >
          SHOW ALL
        </Link>
        <Link 
          className={`p-link ${location.pathname === '/commercial' ? 'active' : ''}`} 
          to='commercial'
        >
          COMMERCIAL
        </Link>
        <Link 
          className={`p-link ${location.pathname === '/education' ? 'active' : ''}`} 
          to='education'
        >
          EDUCATION
        </Link>
        <Link 
          className={`p-link ${location.pathname === '/government' ? 'active' : ''}`} 
          to='government'
        >
          GOVERNMENT
        </Link>
        <Link 
          className={`p-link ${location.pathname === '/infrastructure' ? 'active' : ''}`} 
          to='infrastructure'
        >
          INFRASTRUCTURE
        </Link>
        <Link 
          className={`p-link ${location.pathname === '/residential' ? 'active' : ''}`} 
          to='residential'
        >
          RESIDENTIAL
        </Link>
        <Link 
          className={`p-link ${location.pathname === '/healthcare' ? 'active' : ''}`} 
          to='healthcare'
        >
          HEALTHCARE
        </Link>
      </div>
    </div>
  )
}

export default ProjectHomeBody
