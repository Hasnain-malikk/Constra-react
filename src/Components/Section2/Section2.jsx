import React from 'react'
import "./Section2.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faSliders, faThumbsUp, faUsers } from '@fortawesome/free-solid-svg-icons';
import Accordians from '../Accordians/Accordians';

const Section2 = () => {
  return (
    <div className='section-2'>
      <div className="section-2-left">
        <div className="section-2-left-1">ABOUT US</div>
        <div className="section-2-left-2">WE DELIVER LANDMARK PROJECTS</div>
        <div className="section-2-left-3">We are rethoric question ran over her cheek When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.
        </div>
        <div className="section-2-left-4">
            <div className="section-2-left-4-box">
                <div className="box-logo">
                <FontAwesomeIcon icon={faTrophy} />
                </div>
                <div className="box-text">WE'VE REPUTION FOR EXCELLENCE</div>
            </div>
            <div className="section-2-left-4-box">
            <div className="box-logo">
                <FontAwesomeIcon icon={faSliders} />
                </div>
                <div className="box-text">WE BUILD PARTNERSHIPS</div>
            </div>
            <div className="section-2-left-4-box">
            <div className="box-logo">
                <FontAwesomeIcon icon={faThumbsUp} />
                </div>
                <div className="box-text">GUIDED BY COMMITMENT</div>
            </div>
            <div className="section-2-left-4-box">
            <div className="box-logo">
                <FontAwesomeIcon icon={faUsers} />
                </div>
                <div className="box-text">A TEAM OF PROFESSIONALS</div>
            </div>
        </div>
      </div>
      <div className="section-2-right">
        <div className="section-2-right-1">OUR VALUES</div>
        <div className="section-2-right-2">Minim Austin 3 wolf moon scenester aesthetic, umami odio pariatur bitters. Pop-up occaecat taxidermy street art, tattooed beard literally.</div>
      <Accordians/>
      </div>
    </div>
  )
}

export default Section2
