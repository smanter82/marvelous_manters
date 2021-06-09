import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/SalaMander.css";
import OurNavbar from "../components/OurNavbar";
import sarahBackground from "../images/pageImages/backgrounds/pawel-czerwinski-z7prq6BtPE4-unsplash.jpg";
import firstDayClassroom from "../images/pageImages/sarahImages/firstDayClassroom.jpeg";

export default function SalaMander() {
  return (
    <>
      <OurNavbar></OurNavbar>
      <div
        className="salaManderPage"
        style={{ backgroundImage: `url(${sarahBackground})` }}
      >
        <Container>
          <Row>
            <Col sm={2}></Col>
            <Col>
              <div>
                <Card className="manterMessCard">
                  <Card.Title className="text-center manterMessTitle">
                    Welcome to Our Marvelous Manter Mess
                  </Card.Title>
                  <Card.Img
                    variant="top"
                    src={firstDayClassroom}
                    alt="Mom with coffee, kids at desks"
                    style={{ width: "30rem" }}
                    className="align-self-center"
                  />
                  <Card.Body>
                    <Card.Text>
                      &nbsp; &nbsp;Yesterday was the first day of school. In
                      fall of 2020. 2020, the most tumultuous year many can
                      remember witnessing in their lifetime. My children are
                      starting the year remotely. I’m on leave from work to be
                      with them, and they are taking everything in stride.
                      Somehow, I have ended up with two of the most
                      Go-With-The-Flow kids I know, which is pretty amazing if
                      you know anything about my son. Either way, we’re
                      determined to just make this work for us. <br />
                      &nbsp; &nbsp;They have a little classroom set up for them,
                      essentially. We have this wonder playroom with every craft
                      supply known to man and toys. So. Many. Toys. Minimalists,
                      we are not. The place has been clean, I think, five times
                      in their 9 years. There is almost never a floor. But the
                      learning space, that’s clean. They have side-by-side desks
                      that took me 6 excruciating hours to put together because
                      the designers are clearly nitwits and two matching
                      computer chairs. Everything they need for schooling is
                      organized onto shelves and into drawers. I’m quite proud.
                      This family doesn’t do organized. <br />
                      &nbsp; &nbsp;My house is NEVER clean. I mean, it has never
                      once been clean from top to bottom since we bought it.
                      Even in the beginning of adulthood, when I was responsible
                      for only myself (and then responsible for many things but
                      with a husband), it was always a struggle for me. There
                      were so many more interesting things to do than to get my
                      house in order. I tried. Oh, I tried. I even got close
                      many times. But as our friend Alannis made clear in the
                      90’s, life has a way of rewarding our efforts in funny
                      ways. I never quite got there. Enter children. Abandon
                      hope, all ye who enter here.
                      <br />
                      &nbsp; &nbsp;So yeah, back to the pride. I’m proud. The
                      kids are proud. We have a nice, not-quite-Pinterest-ready
                      learning space, yay! The catch is that the rest of the
                      playroom is quite jungle-like, and the web cams that
                      connect my cherubs to their school universe face the
                      chaos, not our little sanctum of learning. You know what’s
                      great about Zoom, though? They have these cool backgrounds
                      that you can choose to have pop up behind you, like
                      forests and whatnot. These require some kind of a green
                      screen to work properly. In the spring, back when we were
                      figuring out all this remote learning topsy-turviness, I
                      ordered a green screen off of Amazon and hung it on an old
                      portable hanging rod to stick behind our computers. Are
                      you starting to catch the brilliance stirring in this?
                      <br />
                      &nbsp; &nbsp;Learning corner + green screen as divider +
                      creative camera work = on-screen learning utopia. My kids
                      get their peaceful learning bubble and think it’s A-mazing
                      that they get to see their teachers on the screen. I get
                      to drink my coffee in peace, knowing that we’ve avoided a
                      room full of 4th graders and their teachers staring for
                      any length of time at the holy mess that exists behind us.
                      Maybe no one will notice I typed the same date twice for
                      the first day of school pictures. It’s good, it’s all
                      good. Cheers, world! We’ve got this!
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col sm={2}>
              {/* Place this in a better spot!! */}
              <h1 className="pageTitle">SalaMander</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
