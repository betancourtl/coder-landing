import React from 'react';
import { Container, Row, Col } from 'react-flexbox-grids';
import PropTypes from 'prop-types';

const Section5 = () => {
  return (
    <Container
      className="section-5"
      fluid
    >
      <Container>
        <Row>
          <Col
            className="flex"
            xsMiddle
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <div>
              <h2>Our <span className="text-gradient-1">Offices</span></h2>
              <h4>All over the world from US to Europe</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Section5;
