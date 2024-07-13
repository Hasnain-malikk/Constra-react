import React from 'react'
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-links">
        <ul>
          <a href=""><li>HOME</li></a>
          <a href=""><li>COMPANY <FontAwesomeIcon icon={faAngleDown} style={{fontSize:"15px"}} /></li></a>
          <a href=""><li>PROJECTS</li></a>
          <a href=""><li>SERVICES</li></a>
          <a href=""><li>FEATURES</li></a>
          <a href=""><li>NEWS</li></a>
          <a href=""><li>CONTACT</li></a>
        </ul>
      </div>
      <div className="search"><FontAwesomeIcon icon={faMagnifyingGlass} style={{fontSize:"15px",fontWeight:"900"}} /></div>
    </div>
  )
}

export default Navbar
