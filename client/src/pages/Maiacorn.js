import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Maiacorn.css";
import OurNavbar from "../components/OurNavbar";
import maiaBackground from "../images/pageImages/sharon-mccutcheon-zi1GRsLym3s-unsplash.jpg";

export default function Maiacorn() {
  return (
    <>
      <OurNavbar></OurNavbar>
      <div
        class="maiacornPage"
        style={{ backgroundImage: `url(${maiaBackground})` }}
      >
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <p>Welcome to Maia's Page!</p>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
