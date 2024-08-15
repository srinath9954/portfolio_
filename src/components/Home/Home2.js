import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Home2.css";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row style={{ justifyContent: "center", position: "relative" }} className="button-row">
      <Col xs="auto">
        <Link to="/about">
          <Button variant="primary" className="home-button">About</Button>
        </Link>
      </Col>
      <Col xs="auto">
        <Link to="/project">
          <Button variant="primary" className="home-button">Projects</Button>
        </Link>
      </Col>
      <Col xs="auto">
        <Link to="/resume">
          <Button variant="primary" className="home-button">Resume</Button>
        </Link>
      </Col>
    </Row>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am persuing my Integrated MTech Computer Science Engineering at VIT Vellore 🤷‍♂️
              <br />
              <br />I am good in programming languages like
              <i>
                <b className="purple"> Java, Python and C++ . </b>
              </i>
              <br />
              <br />
              My field of Interest's are  &nbsp;
              <i>
                <b className="purple">Web Development using MERN</b> and
                also in areas related to{" "}
                <b className="purple">
                  Machine Learning.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Express.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }} className="button-row">
        <Col xs="auto">
          <Link to="/about">
            <Button variant="primary" className="home-button">About</Button>
          </Link>
        </Col>
        <Col xs="auto">
          <Link to="/project">
            <Button variant="primary" className="home-button">Projects</Button>
          </Link>
        </Col>
        <Col xs="auto">
          <Link to="/resume">
            <Button variant="primary" className="home-button">Resume</Button>
          </Link>
        </Col>
      </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/srinath9954"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/srinath-p-8ab08b227/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/srinath9954"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
