import React, { useState } from "react";
import {
  Navbar,
  NavItem,
  NavbarBrand,
  Nav,
  Button,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand href="/">AJAA</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto">
          {props.token ? (
            <>
              <NavItem>
                <Button onClick={(e) => props.deleteSessionToken()}>
                  LOGOUT
                </Button>
              </NavItem>
            </>
          ) : (
            <>
              <NavItem>
                <Link to="/register">Register</Link>
              </NavItem>
              <NavItem>
                <Link to="/login">Login</Link>
              </NavItem>
            </>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
