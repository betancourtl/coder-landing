import React from 'react';
import img1 from '../../assets/images/step-1.jpg';
import img2 from '../../assets/images/step-2.jpg';
import img3 from '../../assets/images/step-3.jpg';
import { Container, Row, Col } from 'react-flexbox-grids';
import Card from '../../components/Card';
import PropTypes from 'prop-types';

const Section4 = () => {
  return (
    <Container
      className="section-4"
      fluid
    >
      <Container>
        <Row>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <h2>In the <span className="text-gradient-1">news</span></h2>
            <h4>Lean more why people are talking about coder.</h4>
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={4}
          >
            <Card
              img={img1}
              title="VS Code Plugin Support"
              description="Coder is fully compatible ith VS Code plugins. Giving you the exact feature set  you need."
            />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={4}
          >
            <Card
              img={img2}
              title="VS Code Plugin Support"
              description="Coder is fully compatible ith VS Code plugins. Giving you the exact feature set  you need."
            />
          </Col>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={4}
          >
            <Card
              img={img3}
              title="VS Code Plugin Support"
              description="Coder is fully compatible ith VS Code plugins. Giving you the exact feature set  you need."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Section4;
