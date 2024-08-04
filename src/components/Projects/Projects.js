import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cart from "../../Assets/Projects/cart.png";
import drum from "../../Assets/Projects/drum.png";
import gather from "../../Assets/Projects/gather.png";
import hotel from "../../Assets/Projects/hotel.png";
import epanchayat from "../../Assets/Projects/epanchayat.png";
import vitian from "../../Assets/Projects/vitian.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={hotel}
            isBlog={false}
            title="Hotel Recommendation Tool"
            description="A tool for recommending hotels based on user preferences and sentiment analysis of reviews. Built with Flask for scraping hotel data, analyzing sentiments, and providing personalized recommendations."
            ghLink="https://github.com/srinath9954/HotelRecommendationTool"
            demoLink=""
          />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={epanchayat}
            isBlog={false}
            title="ePanchayat"
            description="A comprehensive platform for municipal services, built using the MERN stack (MongoDB, Express.js, React, Node.js) and Firebase for authentication. It offers features like querying municipal services, document upload, and real-time updates."
            ghLink="https://github.com/srinath9954/epanchayat"
            demoLink="https://epanchayat-frontend.vercel.app"
          />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
          imgPath={cart} 
          isBlog={false}
          title="CartMania"
          description="An e-commerce platform designed to provide a seamless shopping experience. It features product browsing, shopping cart functionality."
          ghLink="https://github.com/srinath9954/cartmania"
          demoLink="https://srinath9954.github.io/cartmania/"
        />

          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={gather} 
            isBlog={false}
            title="GatherHub"
            description="An interactive platform designed to facilitate event organization and management. It offers features such as event creation, participant management, and real-time updates to enhance the event planning experience. Used React and Json Server"
            ghLink="https://github.com/srinath9954/react-GatherHub"
            demoLink="https://react-gatherhub.netlify.app/"
          />

          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
          imgPath={drum} 
          isBlog={false}
          title="Drum Music"
          description="An interactive web application that allows users to play virtual drums. The project showcases skills in front-end development, audio processing, and user interaction. Developed using HTML, CSS, and JavaScript."
          ghLink="https://github.com/srinath9954/drum-Music"
          demoLink="https://srinath9954.github.io/drum-Music/"
        />

          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
            imgPath={vitian} 
            isBlog={false}
            title="VITIAN Calculators"
            description="A web application designed for VIT students to calculate their CGPA, grades, and track class leave. The tool helps students manage their academic performance and attendance efficiently."
            ghLink="https://github.com/srinath9954/VITIAN_Calculators"
            demoLink="https://srinath9954.github.io/VITIAN_Calculators/"
          />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
