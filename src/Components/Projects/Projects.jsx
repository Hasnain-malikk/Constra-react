import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import "./Projects.css";

const Projectss = () => {
  return (
    <div className='projects'>
      <div className="recent-projects">
        <div className="small-heading">WORK OF EXCELLENCE</div>
        <div className="main-heading">RECENT PROJECTS</div>
      </div>
      <div className="projects-nav">
        <Link to="/" className='project-link'>SHOW ALL</Link>
        <Link to="commercial" className='project-link'>COMMERCIAL</Link>
        <Link to="education" className='project-link'>EDUCATION</Link>
        <Link to="government" className='project-link'>GOVERNMENT</Link>
        <Link to="infrastructure" className='project-link'>INFRASTRUCTURE</Link>
        <Link to="residential" className='project-link'>RESIDENTIAL</Link>
        <Link to="healthcare" className='project-link'>HEALTHCARE</Link>
      </div>
      <div className="project-outlet">
        <Outlet />
      </div>
    </div>
  );
};

export default Projectss;
