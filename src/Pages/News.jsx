import React from 'react'
import AboutHeader from '../Components/AboutHeader/AboutHeader'
import NewsBody from '../Components/NewsBody/NewsBody'
import ScrollToTop from 'react-scroll-to-top'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

const News = () => {
  return (
    <div>
      <AboutHeader heading1 = "NEWS" heading2 = "HOME / COMPANY / NEWS" />
      <NewsBody/>
      <ScrollToTop style={{backgroundColor:"#252525",height:"36px",width:"36px",borderRadius:"4px"}} smooth component={<FontAwesomeIcon style={{color:"#ffb600",fontSize:"16px",fontWeight:"900"}} icon={faAnglesUp} />} />
    </div>
  )
}

export default News
