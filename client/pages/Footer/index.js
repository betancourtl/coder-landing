import React from 'react';
import { Container, Row, Col } from 'react-flexbox-grids';
import PropTypes from 'prop-types';

const Footer = () => {
  return (
    <Container
      className="footer"
      fluid
    >
      <Container>
        <Row>
          <Col
            xs={8}
            sm={8}
            md={8}
            lg={8}
          >
            <ul className="footer-links">
              <li>Home</li>
              <li>Pricing</li>
              <li>Careers</li>
              <li>Legal</li>
            </ul>
          </Col>
          <Col
            className="flex"
            xs={4}
            xsEnd
            sm={4}
            md={4}
            lg={4}
          >
            <ul className="footer-social-links">
              <li>
                <i className="fab fa-facebook-f"/>
              </li>
              <li>
                <i className="fab fa-linkedin-in"/>
              </li>
              <li>
                <i className="fab fa-twitter"/>
              </li>
              <li>
                <i className="fab fa-github"/>
              </li>
              <li>
                <i className="fab fa-facebook-f"/>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;