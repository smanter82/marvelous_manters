import React from "react";
// import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.css";

export default function Maiacorn() {
  return (
    <>
      {/* <Navbar> */}
      <p>Welcome to the Manters' Special Talents Website!</p>
      <Nav>
        <Nav.Link href="/salamander">SalaMander</Nav.Link>
        <Nav.Link href="/maiacorn">Maiacorn</Nav.Link>
        <Nav.Link href="/duncman">DuncMan</Nav.Link>
      </Nav>
      {/* </Navbar> */}
    </>
  );
}
