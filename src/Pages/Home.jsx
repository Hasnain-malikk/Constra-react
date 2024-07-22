import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SwiperCarousel from '../Components/SwiperCarousel/SwiperCarousel';
import Section2 from '../Components/Section2/Section2';
import Counter from '../Components/Counter/Counter';
import WhatWeDo from '../Components/WhatWeDo/WhatWeDo';
import HappyClient from '../Components/HappyClient/HappyClient';
// import Projects from '../Components/Projects/Projects';
// import Commercial from "../Components/ProjectPages/Commerical";
// import ShowAll from "../Components/ProjectPages/ShowAll";
// import Eduaction from "../Components/ProjectPages/Eduaction";
// import Government from "../Components/ProjectPages/Government";
// import Healthcare from "../Components/ProjectPages/Healthcare";
// import Infrastructure from "../Components/ProjectPages/Infrastructure";
// import Residential from "../Components/ProjectPages/Residential";

const Home = () => {
  return (
    <div>
      <SwiperCarousel />
      <Section2 />
      <Counter />
      <WhatWeDo />
      {/* <Routes>
        <Route path="/" element={<Projects />}>
          <Route index element={<ShowAll />} />
          <Route path="commercial" element={<Commercial />} />
          <Route path="education" element={<Eduaction />} />
          <Route path="government" element={<Government />} />
          <Route path="infrastructure" element={<Infrastructure />} />
          <Route path="residential" element={<Residential />} />
          <Route path="healthcare" element={<Healthcare />} />
        </Route>
      </Routes> */}
      <HappyClient/>
    </div>
  );
};

export default Home;
