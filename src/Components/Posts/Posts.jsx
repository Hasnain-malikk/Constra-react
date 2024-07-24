import React from 'react'
import "./Posts.css"
import p1 from "/ReactJs/constra-react/src/assets/rp-1.jpg"
import p2 from "/ReactJs/constra-react/src/assets/rp-2.jpg"
import p3 from "/ReactJs/constra-react/src/assets/rp-3.jpg"

const Posts = () => {
  return (
    <div className='posts'>
      <div className="posts-header">
        <div className="posts-header-1">WORK OF EXCELLENCE</div>
        <div className="posts-header-2">RECENT PROJECTS</div>
      </div>
      <div className="posts-body">
        <div className="posts-main">
            <div className="post1">
            <div className="post-pic">
                    <img src={p1} alt="" />
                </div>
                <div className="post-heading">
                WE JUST COMPLETES $17.6 MILLION MEDICAL CLINIC IN MID-MISSOURI
                </div>
                <div className="post-date">JULY 20, 2017</div>
            </div>
            <div className="post1">
                <div className="post-pic">
                    <img src={p2} alt="" />
                </div>
                <div className="post-heading">
                THANDLER AIRPORT WATER RECLAMATION FACILITY EXPANSION PROJECT NAMED
                </div>
                <div className="post-date">JUNE 17, 2017</div>
            </div>
            <div className="post1">
            <div className="post-pic">
                    <img src={p3} alt="" />
                </div>
                <div className="post-heading">
                SILICON BENCH AND CORNIKE BEGIN CONSTRUCTION SOLAR FACILITIES
                </div>
                <div className="post-date">AUG 13, 2017</div>
            </div>
        </div>
        <div className="posts-btn">
            <button>SEE ALL POSTS</button>
        </div>
      </div>
    </div>
  )
}

export default Posts
