// BootStrapNav.js
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './BootStrapNav.css';

function BootStrapNav() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#23282D', height: '75px' }} className="bg-body-pink">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: '#FFB600', border: '0', color: '#23282D' }} />
        <Navbar.Collapse id="basic-navbar-nav" className="custom-collapse">
          <Nav className="me-auto" id="mdq">
            <Nav.Link as={Link} to="/" id="navLinks" className="nav-link-custom">HOME</Nav.Link>
            <NavDropdown style={{ color: 'white', fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '700' }} title="COMPANY" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/aboutus" id="new">ABOUT US</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/ourpeople" id="new">OUR PEOPLE</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/testimonials" id="new">TESTIMONIALS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/faq" id="new">FAQ</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/pricing" id="new">PRICING</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/projects" id="navLinks" className="nav-link-custom">PROJECTS</Nav.Link>
            <Nav.Link as={Link} to="/services" id="navLinks" className="nav-link-custom">SERVICES</Nav.Link>
            <Nav.Link as={Link} to="/features" id="navLinks" className="nav-link-custom">FEATURES</Nav.Link>
            <Nav.Link as={Link} to="/news" id="navLinks" className="nav-link-custom">NEWS</Nav.Link>
            <Nav.Link as={Link} to="/contact" id="navLinks" className="nav-link-custom">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BootStrapNav;
