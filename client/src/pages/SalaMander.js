import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/SalaMander.css";
import OurNavbar from "../components/OurNavbar";
import sarahBackground from "../images/pageImages/backgrounds/pawel-czerwinski-z7prq6BtPE4-unsplash.jpg";

export default function SalaMander() {
  return (
    <>
      <OurNavbar></OurNavbar>
      <div
        class="salaManderPage"
        style={{ backgroundImage: `url(${sarahBackground})` }}
      >
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <p style={{ color: "white" }}>Welcome to Sarah's Page!</p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
