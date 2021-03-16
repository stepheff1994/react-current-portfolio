import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import {Navbar, Nav} from "react-bootstrap";


function Header() {
  return (
    <>
      <header>
        <Navbar bg="dark" expand="lg" variant="dark">
          <LinkContainer to = "/">
            <Navbar.Brand>Stephanie Freyler Santana
            
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to = "/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to = "/current">
                <Nav.Link>Current</Nav.Link>
              </LinkContainer>
              <LinkContainer to = "/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
