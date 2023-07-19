import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MovNav = () => {

  <p>merahab</p>
  return ( 
    <Navbar bg="light" expand="lg">
    <Container fluid>
    <Navbar.Brand>Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Movies</Nav.Link>
            <Nav.Link href="#action2">Kids</Nav.Link>
            <Nav.Link href="#action2">Documentry</Nav.Link>
            <NavDropdown title="Türler" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Korku</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Gerilim
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Komedi
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              style={{width:'320px'}}
              type="search"
              placeholder="Search"
              className=""
              aria-label="Search"
            />
            <Button className='ms-5 w-75' variant="outline-success">Login</Button>
            <Button className='ms-2 w-75' variant="outline-success">Sign Up</Button>
          </Form>
        </Navbar.Collapse>
      
    </Container>
  </Navbar>
  );
}

export default MovNav