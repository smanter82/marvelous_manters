import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/DuncMan.css";
import OurNavbar from "../components/OurNavbar";
import duncanBackground from "../images/pageImages/backgrounds/sharon-mccutcheon-c552nUDkL_Q-unsplash.jpg";
import superSunOrigin from "../images/pageImages/duncanImages/superSunOrigin.jpeg";
import superSunBeginnings from "../images/pageImages/duncanImages/superSunBeginnings.jpeg";
import superSunComic from "../images/pageImages/duncanImages/superSunComic.jpeg";

export default function DuncMan() {
  return (
    <>
      <OurNavbar></OurNavbar>
      <div
        className="duncManPage"
        style={{ backgroundImage: `url(${duncanBackground})` }}
      >
        <Container fluid>
          <Row>
            <Col sm={4}>
              <Card className="m-5 mx-auto" style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src={superSunOrigin}
                  alt="Super Sun Origin"
                />
                <Card.Body>
                  <Card.Title>Super Sun Origin</Card.Title>
                  <Card.Text>
                    When evil villains turn the sun into the moon and turn day
                    into night, Super Sun has the power to bring the sun back
                    and turn night back into day!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4} className="text-center mt-5">
              <h1 className="duncTitle">DuncMan</h1>
              <Card className="m-5 mx-auto" style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src={superSunBeginnings}
                  alt="Super Sun Beginnings"
                />
                <Card.Body>
                  <Card.Title>Super Sun Beginnings</Card.Title>
                  <Card.Text>
                    Our first look at Super Sun's archnemesis Lunar Boy
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card className="m-5 mx-auto" style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src={superSunComic}
                  alt="Super Sun Comic"
                />
                <Card.Body>
                  <Card.Title>Super Sun and the Lunar Boy Conundrum</Card.Title>
                  <Card.Text>
                    Can Super Sun stop Lunar Boy from turning the sun into the
                    moon??
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
