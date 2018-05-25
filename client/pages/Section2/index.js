import React from 'react';
import img2 from '../../assets/images/img-2.png';
import icon1 from '../../assets/images/icon-1.jpg';
import icon2 from '../../assets/images/icon-2.jpg';
import ListItem from '../../components/ListItem';
import { Container, Row, Col } from 'react-flexbox-grids';
import PropTypes from 'prop-types';

const Section2 = () => {
  return (
    <Container
      className="section-2"
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
            <img
              className="img-responsive"
              src={img2}
            />
          </Col>
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
            <ListItem
              icon={icon1}
              title="Lorem ipsum dolor sit"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        iure maiores nostrum obcaecati quia, reiciendis. Accusantium cum
        cupiditate dignissimos et fugit illum, itaque"
            />
            <ListItem
              icon={icon2}
              title="Lorem ipsum dolor sit"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        iure maiores nostrum obcaecati quia, reiciendis. Accusantium cum
        cupiditate dignissimos et fugit illum, itaque"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Section2;
