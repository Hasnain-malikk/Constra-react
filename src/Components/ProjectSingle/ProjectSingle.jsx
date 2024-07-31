import React, { useState } from 'react';
import "./ProjectSingle.css";

const ProjectSingle = ({bgimg,img,name,type}) => {
  const [isSheetVisible, setIsSheetVisible] = useState(false);

  const handleButtonClick = () => {
    setIsSheetVisible(true);
  };

  const handleCloseSheet = () => {
    setIsSheetVisible(false);
  };

  return (
    <div className='project-single' id={bgimg} >
      <div className="front">
        <div className="plus-btn">
          <button onClick={handleButtonClick}>+</button>
        </div>
        <div className="project-name">
          {name}
        </div>
        <span className='project-type'>{type}</span>
      </div>
      {isSheetVisible && (
        <div className={`sheet ${isSheetVisible ? 'active' : ''}`} onClick={handleCloseSheet}>
          <div className="sheet-content">
            <img src={img} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectSingle;
