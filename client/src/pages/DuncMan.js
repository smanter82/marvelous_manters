import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/DuncMan.css";
import OurNavbar from "../components/OurNavbar";

export default function DuncMan() {
  return (
    <>
      <OurNavbar></OurNavbar>
      <div class="duncManPage">
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
