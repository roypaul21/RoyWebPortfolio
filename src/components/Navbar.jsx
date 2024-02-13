
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="" fixed="top" data-bs-theme="dark" >
      <Container>
        <Navbar.Brand href="/"><img
              src="./image/logo.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Yor"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id="navbar-section-pages">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/aboutme" >About Me</Nav.Link>
            <Nav.Link href="/" >Skills</Nav.Link>
          </Nav>
          <Nav>
            <Button variant="light" size="sm" href="/">
                Contact
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;