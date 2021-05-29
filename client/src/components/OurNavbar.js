import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../styles/OurNavbar.css";

export default function OurNavbar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand href="/">Marvelous Manters</Navbar.Brand>
        <Navbar.Toggle id="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="SalaMander">SalaMander</Nav.Link>
            <Nav.Link href="Maiacorn">Maiacorn</Nav.Link>
            <Nav.Link href="DuncMan">DuncMan</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
