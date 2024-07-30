import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "./ProjectBody.css";

const ProjectBody = () => {
  const location = useLocation();

  return (
    <div className='project-body'>
      <div className="project-bar">
        <Link 
          className={`p-link ${location.pathname === '/projects/showall' ? 'active' : ''}`} 
          to='showall'
        >
          SHOW ALL
        </Link>
        <Link 
          className={`p-link ${location.pathname === '/projects/commercial' ? 'active' : ''}`} 
          to='commercial'
        >
          COMMERCIAL
        </Link>
        <Link 
          className={`p-link ${location.pathname === '/projects/education' ? 'active' : ''}`} 
          to='education'
        >
          EDUCATION
        </Link>
        <Link 
          className={`p-link ${location.pathname === '/projects/government' ? 'active' : ''}`} 
          to='government'
        >
          GOVERNMENT
        </Link>
        <Link 
          className={`p-link ${location.pathname === '/projects/infrastructure' ? 'active' : ''}`} 
          to='infrastructure'
        >
          INFRASTRUCTURE
        </Link>
        <Link 
          className={`p-link ${location.pathname === '/projects/residential' ? 'active' : ''}`} 
          to='residential'
        >
          RESIDENTIAL
        </Link>
        <Link 
          className={`p-link ${location.pathname === '/projects/healthcare' ? 'active' : ''}`} 
          to='healthcare'
        >
          HEALTHCARE
        </Link>
      </div>
    </div>
  );
}

export default ProjectBody;
