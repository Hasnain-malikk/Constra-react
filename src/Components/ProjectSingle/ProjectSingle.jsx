import React, { useState } from 'react';
import "./ProjectSingle.css";
import p1 from "/ReactJs/constra-react/src/assets/project1.jpg"

const ProjectSingle = () => {
  const [isSheetVisible, setIsSheetVisible] = useState(false);

  const handleButtonClick = () => {
    setIsSheetVisible(true);
  };

  const handleCloseSheet = () => {
    setIsSheetVisible(false);
  };

  return (
    <div className='project-single'>
      <div className="front">
        <div className="plus-btn">
          <button onClick={handleButtonClick}>+</button>
        </div>
        <div className="project-name">
          CAPITAL TELTWAY BUILDING
        </div>
        <span className='project-type'>COMMERCIAL INTERIORS</span>
      </div>
      {isSheetVisible && (
        <div className={`sheet ${isSheetVisible ? 'active' : ''}`} onClick={handleCloseSheet}>
          <div className="sheet-content">
            <img src={p1} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectSingle;
