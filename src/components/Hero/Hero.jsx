import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import './Hero.css'; // Assuming you're using custom CSS for additional styles

const Hero = () => {
  return (
    <div className='hero'>
      <Container>
        <Row className="align-items-center">
          {/* First Column */}
          <Col xs={12} md={6}>
            <h2>Your Vision.<br />Your Code.</h2>
            <p>
              We build high-quality websites and web applications that help businesses thrive.
            </p>
            <Button variant="primary" size="lg" className="get-in-touch-button">
              Get in Touch
            </Button>
            <p className="collaborate-text">Collaborate with our team</p>
          </Col>

          {/* Second Column (Image) */}
          <Col xs={12} md={6}>
            <img 
              src="https://via.placeholder.com/500"  // Replace with your image URL
              alt="Hero Image"
              className="hero-image"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
