import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SwiperCarousel from '../Components/SwiperCarousel/SwiperCarousel';
import Section2 from '../Components/Section2/Section2';
import Counter from '../Components/Counter/Counter';
import WhatWeDo from '../Components/WhatWeDo/WhatWeDo';
import HappyClient from '../Components/HappyClient/HappyClient';
import Posts from '../Components/Posts/Posts';
import ProjectHeading from '../Components/ProjectSingle/ProjectHeading';
import Commercial from "../Components/ProjectPages/Commerical";
import ShowAll from "../Components/ProjectPages/ShowAll";
import Education from "../Components/ProjectPages/Eduaction";
import Government from "../Components/ProjectPages/Government";
import Healthcare from "../Components/ProjectPages/Healthcare";
import Infrastructure from "../Components/ProjectPages/Infrastructure";
import Residential from "../Components/ProjectPages/Residential";
import ProjectBtn from '../Components/ProjectSingle/ProjectBtn';
import ProjectHomeBody from '../Components/ProjectBody/ProjectHomeBody';
import ScrollToTop from 'react-scroll-to-top';

const Home = () => {
  return (
    <div>
      <SwiperCarousel />
      <Section2 />
      <Counter />
      <WhatWeDo />
      <ProjectHeading/>
      <ProjectHomeBody/>
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
        </div>
        <ProjectBtn/>
      <HappyClient/>
      <Posts/>
      <div>
      <ScrollToTop style={{backgroundColor:"#ffb600",height:"50px",width:"50px"}} smooth />
    </div>
    </div>
  );
};

export default Home;
