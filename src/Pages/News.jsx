import React from 'react'
import AboutHeader from '../Components/AboutHeader/AboutHeader'
import NewsBody from '../Components/NewsBody/NewsBody'
import ScrollToTop from 'react-scroll-to-top'

const News = () => {
  return (
    <div>
      <AboutHeader heading1 = "NEWS" heading2 = "HOME / COMPANY / NEWS" />
      <NewsBody/>
      <ScrollToTop style={{backgroundColor:"#ffb600",height:"50px",width:"50px"}} smooth/>
    </div>
  )
}

export default News
