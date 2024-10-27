import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {

  return (
    <Container fluid className="footer" >
      <Row>
        
      <Col md="12" className="footer-body" style={{ textAlign: "center" }}>
        <ul className="footer-icons" style={{ listStyleType: "none", padding: 0, margin: 0 }}>
            <li className="social-icons" style={{ display: "inline-block", margin: "0 15px" }}>
              <a
                href="https://github.com/ayesharafiq151342"
                style={{ color: "white", fontSize: "1.5rem" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons" style={{ display: "inline-block", margin: "0 15px" }}>
              <a
                href="https://www.linkedin.com/in/ayesha-rafiq-151342ash/"
                style={{ color: "white", fontSize: "1.5rem" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          
          
            <li className="social-icons" style={{ display: "inline-block", margin: "0 15px" }}>
              <a
                href="https://www.instagram.com/code_with_ash_learning/"
                style={{ color: "white", fontSize: "1.5rem" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
