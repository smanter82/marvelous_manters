import OurNavbar from "../components/OurNavbar.js";
import { Container, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.css";
import wordLogo from "../images/pageImages/pageLogoWithText.jpg";

export default function HomePage() {
  return (
    <>
      <OurNavbar></OurNavbar>
      <div class="homePage">
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <Card style={{ width: "50rem" }}>
                <Card.Body>
                  <Card.Title class="text-center">
                    Welcome to the Manters' Special Talents Website!
                  </Card.Title>
                  <Card.Img
                    variant="bottom"
                    src={wordLogo}
                    alt="Marvelous Manters logo"
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
