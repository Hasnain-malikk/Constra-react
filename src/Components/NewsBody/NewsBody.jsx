import React from 'react'
import "./NewsBody.css"
import p1 from "/ReactJs/constra-react/src/assets/rp-1.jpg"
import p2 from  "/ReactJs/constra-react/src/assets/testimonial-1.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faFolderOpen, faCalendar, faComment } from '@fortawesome/free-regular-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF , faGooglePlus, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';

const NewsBody = () => {
  return (
    <div className='news-body'>
      <div className="news-body1">
        <div className="news-body1-1">
           <img src={p1} alt="" />
        </div>
        <div className="news-body1-2">
            <div className="post-meta">
               <FontAwesomeIcon icon={faUser} />
               <div className='post-meta1'>&nbsp;&nbsp;Admin&nbsp;&nbsp;&nbsp;</div>
               &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faFolderOpen} />
               <div className='post-meta1'>&nbsp;&nbsp;News&nbsp;&nbsp;&nbsp;</div>
               &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faCalendar} />
               <div className='post-meta1'>&nbsp;&nbsp;July 28, 2024&nbsp;&nbsp;&nbsp;</div>
               &nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faComment} />
               <div className='post-meta1 last'>&nbsp;&nbsp;03 Comments&nbsp;&nbsp;&nbsp;</div>
            </div>
            <div className="entry-heading">
            We Just Completes $17.6 million Medical Clinic in Mid-Missouri
            </div>
            <div className="news-body-para1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
            <div className="news-body-para1">
            Kucididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            </div>
            <div className="news-body-para1">
            Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </div>
            <div className="news-body-para2">
                <FontAwesomeIcon className='quote-news' icon={faQuoteLeft} />
                <div className="news-body-para2-text">Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</div>
                <div className="news-body-para2-text mrg">- Anger Mathe</div>
            </div>
            <div className="news-body-para1">Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos quira tione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ue magnam aliquam quaerat voluptatem.</div>
            <div className="meta-social">
                <div className="meta-social1">
                <button className='meta-btn'>Construction</button>
                <button className='meta-btn'>Safety</button>
                <button className='meta-btn'>Planning</button>
                </div>
                <div className="meta-social2">
                    <div className="meta-social2-text">Share:</div>
                    <FontAwesomeIcon className='fb' icon={faFacebookF} />
                    <FontAwesomeIcon className='tw' icon={faTwitter} />
                    <FontAwesomeIcon className='gp' icon={faGooglePlus} />
                    <FontAwesomeIcon className='li' icon={faLinkedin} />
                </div>
            </div>
            <div className="site-engineer">
                <img src={p2} alt="" />
                <div className="site-engineer-text">
                <div className="site-engineer-text1">
                    <div className="site-engineer-text-1">ELTON THEMEN</div>
                    <div className="site-engineer-text-2">Site Engineer</div>
                </div>
                <div className="site-engineer-text2">
                Lisicing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad vene minim veniam, quis nostrud exercitation nisi ex ea commodo.
                </div>
                <div className="site-engineer-text3">
                    Website:&nbsp;
                    <div className="site-engineer-text3-link">
                    http://www.example.com
                    </div>
                </div>
                </div>
            </div>
            <div className="body-comments">
                <h3>07 Comments</h3>
                <div className="comment-body">
                    <div className="comment-body-left">
                        <img src={p2} alt="" />
                    </div>
                    <div className="comment-body-right">
                        <div className="comment-body-right1">
                        <div className="comment-head">Michelle Aimber</div>
                        <div className="comment-head-end">January 17, 2016 at 1:38 pm</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div className="news-body2">ss</div>
    </div>
  )
}

export default NewsBody 
