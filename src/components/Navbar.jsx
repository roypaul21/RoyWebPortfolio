
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="" fixed="top" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand href="/">
          <Link to="/">
            <img
                src="./image/logo.png"
                width="40"
                height="40"
                className="d-inline-block align-top"
                alt="Yor"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id="navbar-section-pages">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/aboutme">About Me</Link>
            <Link className='nav-link' to="/skills">Skills</Link>
          </Nav>
          <Nav>
            <Link to="/contact">
              <Button variant="light" size="sm">
                  Contact Me
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;