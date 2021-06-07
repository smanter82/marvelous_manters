import React from "react";
import { Container, Card, Row, Col, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Maiacorn.css";
import OurNavbar from "../components/OurNavbar";
import maiaBackground from "../images/pageImages/backgrounds/sharon-mccutcheon-zi1GRsLym3s-unsplash.jpg";
import balloonRally from "../images/pageImages/maiaImages/balloonRally.jpeg";
import chalkDrawing from "../images/pageImages/maiaImages/chalkDrawing.jpeg";
import hope from "../images/pageImages/maiaImages/hope.jpeg";
import rainbow from "../images/pageImages/maiaImages/rainbow.jpeg";
import selfPortrait from "../images/pageImages/maiaImages/selfPortrait.jpeg";

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
              <Carousel fade>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={balloonRally}
                    alt="Balloon Rally"
                  />
                  <Carousel.Caption>
                    <h3>Pittsfield Balloon Rally</h3>
                    <p>Youth Art Month Nominee.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={chalkDrawing}
                    alt="Chalk Drawing with shapes"
                  />

                  <Carousel.Caption>
                    <h3>Pop Art</h3>
                    <p>Inspired by Andy Warhol.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={hope} alt="hope" />

                  <Carousel.Caption>
                    <h3>Hope</h3>
                    <p>My Wish for the World using WordFoto App.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={chalkDrawing}
                    alt="Chalk Drawing with shapes"
                  />

                  <Carousel.Caption>
                    <h3>Pop Art</h3>
                    <p>Inspired by Andy Warhol.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={hope} alt="hope" />

                  <Carousel.Caption>
                    <h3>Hope</h3>
                    <p>My Wish for the World using WordFoto App.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={rainbow}
                    alt="Rainbow and Flowers"
                  />

                  <Carousel.Caption>
                    <h3>Rainbow and Flowers</h3>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={selfPortrait}
                    alt="self portrait"
                  />

                  <Carousel.Caption>
                    <h3>Self Portrait</h3>
                    <p>Maia Corinne Manter</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
