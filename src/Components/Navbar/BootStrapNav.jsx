import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./BootStrapNav.css";

function BootStrapNav() {
  return (
    <Navbar expand="lg" style={{backgroundColor:"#23282D",height:"75px"}} className="bg-body-pink">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"#FFB600",border:"0",color:"#23282D"}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" id='mdq'>
            <Nav.Link href="#home" id='navLinks' className="nav-link-custom">HOME</Nav.Link>
            <NavDropdown style={{color:"white",fontFamily:"Montserrat",fontSize:"14px",fontWeight:"700"}} title="COMPANY" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id='navLinks' className="nav-link-custom" href="#link">PROJECTS</Nav.Link>
            <Nav.Link id='navLinks' className="nav-link-custom" href="#link">SERVICES</Nav.Link>
            <Nav.Link id='navLinks' className="nav-link-custom" href="#link">FEATURES</Nav.Link>
            <Nav.Link id='navLinks' className="nav-link-custom" href="#link">NEWS</Nav.Link>
            <Nav.Link id='navLinks' className="nav-link-custom" style={{marginBottom:"15px"}} href="#link">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BootStrapNav;
