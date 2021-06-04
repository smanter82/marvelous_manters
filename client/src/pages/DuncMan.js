import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/DuncMan.css";
import OurNavbar from "../components/OurNavbar";
import duncanBackground from "../images/pageImages/sharon-mccutcheon-c552nUDkL_Q-unsplash.jpg";

export default function DuncMan() {
  return (
    <>
      <OurNavbar></OurNavbar>
      <div
        class="duncManPage"
        style={{ backgroundImage: `url(${duncanBackground})` }}
      >
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <p>Welcome to Duncan's Page!</p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
