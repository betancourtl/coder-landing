import React from 'react';
import img1 from '../../assets/images/img-1.png'
import { Container, Row, Col } from 'react-flexbox-grids';

const Section1 = () => {
  return (
    <Container fluid className="section-1">
      <Container>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
          >
            <h2>About Us</h2>
            <h4>
              Whenever you need to buy something that will go
              with whatever you are that day, you may need
              to think about getting some design watches.
            </h4>
            <button className="btn-3">
              Current Openings
            </button>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
          >
            <img src={img1} className="img-responsive" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Section1;