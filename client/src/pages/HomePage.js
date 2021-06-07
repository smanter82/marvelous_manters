import OurNavbar from "../components/OurNavbar.js";
import { Container, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomePage.css";
import wordLogo from "../images/pageImages/pageLogoWithText.jpg";
import homeImage from "../images/pageImages/backgrounds/pawel-czerwinski-6lQDFGOB1iw-unsplash.jpg";

export default function HomePage() {
  return (
    <>
      <OurNavbar></OurNavbar>
      <div className="homePage" style={{ backgroundImage: `url(${homeImage}` }}>
        <Container>
          <Row>
            <Col></Col>
            <Col>
              <Card className="m-5" style={{ width: "50rem" }}>
                <Card.Body>
                  <Card.Title className="text-center">
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
