import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards"; // Updated to use the correct component
import Particle from "../Particle";

import editor from "./New folder/df-removebg-preview.png";
import chatify from "./New folder/as-removebg-preview.png";
import bitsOfCode from "./New folder/Screenshot_2024-10-25_235837-removebg-preview.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={chatify}
              title="Watch Project"
              description="Crafted with precision, my watch project showcases a modern design focused on style and functionality. Featuring a responsive layout, intuitive navigation, and a sleek card-based product display, this project highlights my skills in creating a visually appealing and user-friendly interface."
              demoLink="https://steady-fox-16ab95.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={bitsOfCode}
              title="Studynex Project"
              description="Crafted with precision, my Studynex project showcases a modern design focused on style and functionality. Featuring a responsive layout, intuitive navigation, and a sleek card-based product display, this project highlights my skills in creating a visually appealing and user-friendly interface."
              demoLink="https://storied-pothos-0f1212.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={editor}
              title="Another Studynex Project"
              description="Crafted with precision, this project showcases a modern design focused on style and functionality. Featuring a responsive layout, intuitive navigation, and a sleek card-based product display, this project highlights my skills in creating a visually appealing and user-friendly interface."
              demoLink="https://capable-unicorn-529aa0.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
