import React from 'react';
import img3 from '../../assets/images/img-3.png';
import { Container, Row, Col } from 'react-flexbox-grids';
import PropTypes from 'prop-types';

const Section3 = () => {
  return (
    <Container
      className="section-3"
      fluid
    >
      <Container>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
          >
            <h2>How we <span className="text-gradient-2">started?</span></h2>
            <p className="section-2-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur doloribus exercitationem facilis incidunt natus numquam
              possimus sequi! Dolorum earum, vitae? Consequuntur eaque eius esse
              nam quisquam tempora tenetur voluptatem voluptates.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur doloribus exercitationem
            </p>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
          >
            <img
              className="img-responsive"
              src={img3}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Section3;
