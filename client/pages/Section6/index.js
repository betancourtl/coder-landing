import React from 'react';
import { Container, Row, Col } from 'react-flexbox-grids';
import TrialForm from '../../components/TrialForm';
import ListItem from '../../components/ListItem';
import icon3 from '../../assets/images/icon-3.jpg';
import icon4 from '../../assets/images/icon-4.jpg';
import PropTypes from 'prop-types';

const Section6 = () => {
  return (
    <Container
      className="section-6"
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
            <TrialForm />
          </Col>

          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
          >
            <Row>
              <Col xs={12}>
                <div className="section-6-header">
                  <h2>
                    <span className="text-gradient-1">Sign Up</span>
                    <br />
                    For Free for an exclusive invite.
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi
                    consequuntur modi, officiis perferendis reprehenderit vel!
                    Ad
                    assumenda, at error esse eum facere illum
                  </p>
                </div>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={6}
              >
                <ListItem
                  icon={icon3}
                  title="Lorem ipsum dolor sit"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        iure maiores nostrum obcaecati quia, reiciendis. Accusantium cum
        cupiditate dignissimos et fugit illum, itaque"
                />
              </Col>
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={6}
              >
                <ListItem
                  icon={icon4}
                  title="Lorem ipsum dolor sit"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
        iure maiores nostrum obcaecati quia, reiciendis. Accusantium cum
        cupiditate dignissimos et fugit illum, itaque"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Section6;
