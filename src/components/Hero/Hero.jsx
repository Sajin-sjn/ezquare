import React from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import './Hero.css'; 
import HeroImg from '../../assets/Hero-img.png';

const Hero = () => {
  return (
    <div className='hero'>
      <Container className="p-0">
        <Row className="align-items-center mt-0 mb-0">
          {/* First Column (Text and Button) */}
          <Col xs={12} md={6} className="order-md-1 order-2">
            <div className="hero-content mx-auto">
              <h2 className="mb-3">Your Vision.<br />Your Code.</h2>
              <p className="mb-3 hero-description">
                We build high-quality websites and web applications that help businesses thrive.
              </p>
              <Button size="lg" className="get-in-touch-button w-100 get-in-touch">
                Get in Touch
              </Button>
              <p className="collaborate-text">Collaborate with our team</p> {/* Adjusted margin */}
            </div>
          </Col>

          {/* Second Column (Image) */}
          <Col xs={12} md={6} className="order-md-2 order-1">
            <img 
              src={HeroImg}
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
