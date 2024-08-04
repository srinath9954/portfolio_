import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Srinath </span>
            from <span className="purple"> Vellore,Tamil Nadu, India.</span>
            <br />
            I am currently pursuing Integrated MTech Computer Science Engineering at VIT Vellore .
            <br />
            <br />
            Activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watching and Playing Sport
            </li>
            <li className="about-activity">
              <ImPointRight /> Coding
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
