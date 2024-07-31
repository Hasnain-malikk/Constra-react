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

const Projects = () => {
  return (
    <div style={{overflowX:"hidden"}}>
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
      </div>
    </div>
  );
}

export default Projects;
