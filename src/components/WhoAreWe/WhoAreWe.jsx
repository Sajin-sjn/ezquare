import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './WhoAreWe.css';
import WhoAreWeImg from '../../assets/WhoAreWe.png';

const WhoAreWe = () => {
    return(
        <section className="WhoAreWe">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} className="order-md-1 order-1 d-flex justify-content-center">
                        <img 
                            src={WhoAreWeImg} 
                            alt="Who Are We" 
                            className="who-are-we-image" 
                        />
                    </Col>
                    <Col xs={12} md={4} className="order-md-2 order-2 mx-auto">
                        <div className="who-are-we-content">
                            <h2> <span class="head-color"> WHO </span> ARE WE?</h2>
                            <p>
                                We design and develop websites, apps and digital experiences that help our clients grow, innovate, and transform. We listen, learn and understand before we build. We identify your goals together, then use our expertise to find that sweet spot of realistic and impactful.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default WhoAreWe;