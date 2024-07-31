import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AboutHeader from '../Components/AboutHeader/AboutHeader';
import ProjectBody from '../Components/ProjectBody/ProjectBody';
import ShowAll from "../Components/ProjectPages/ShowAll";
import Commercial from "../Components/ProjectPages/Commerical";
import Education from "../Components/ProjectPages/Eduaction";
import Government from "../Components/ProjectPages/Government";
import Infrastructure from "../Components/ProjectPages/Infrastructure";
import Residential from "../Components/ProjectPages/Residential";
import Healthcare from "../Components/ProjectPages/Healthcare";
import ProjectBtn from '../Components/ProjectSingle/ProjectBtn';
import ScrollToTop from 'react-scroll-to-top';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <div className='pnn'>
      <AboutHeader heading1="PROJECT" heading2="HOME / COMPANY / PROJECTS" />
      <ProjectBody />
      <div className="project-content">
        <Routes>
          <Route path="/" element={<Navigate to="showall" />} />
          <Route path="showall" element={<ShowAll />} />
          <Route path="commercial" element={<Commercial />} />
          <Route path="education" element={<Education />} />
          <Route path="government" element={<Government />} />
          <Route path="infrastructure" element={<Infrastructure />} />
          <Route path="residential" element={<Residential />} />
          <Route path="healthcare" element={<Healthcare />} />
        </Routes>
        <ProjectBtn/>
        <ScrollToTop style={{backgroundColor:"#252525",height:"40px",width:"36px",borderRadius:"4px"}} smooth component={<FontAwesomeIcon style={{color:"#ffb600",fontSize:"16px",fontWeight:"900"}} icon={faAnglesUp} />} />
      </div>
    </div>
  );
}

export default Projects;
