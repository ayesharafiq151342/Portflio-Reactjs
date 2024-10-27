import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiHtml5, DiCss3, DiPhp, DiReact, DiBootstrap, DiGithubBadge, DiGit } from "react-icons/di";
import { SiWordpress, SiTailwindcss } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWordpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Techstack;
