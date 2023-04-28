import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/images/prismtech.png'
const Header = () => {
  return (
    <>
  
    <Navbar collapseOnSelect expand="lg" sticky='top'   height={80}>
      <Container>
        
               <Navbar.Brand as={Link} to="/">
               <img  src={logo} height={40} width={70} alt="" />
                </Navbar.Brand>
            
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-link">
           
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="work">Work</Nav.Link>
            <Nav.Link as={Link} to="service">Services</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}

export default Header