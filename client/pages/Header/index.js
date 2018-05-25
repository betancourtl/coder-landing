import React from 'react';
import { Container, Row, Col } from 'react-flexbox-grids';
import logo from '../../assets/images/logo.png';
import PropTypes from 'prop-types';

const Header = () => {
  return (
    <Container fluid>
      <Container>
        <Row className="header">
          <Col
            xs={8}
            xsMiddle
            md={8}
            sm={8}
            lg={8}
            className="flex"
          >
            <img src={logo} alt="" />
          </Col>
          <Col
            xs={4}
            sm={4}
            md={4}
            lg={4}
            className="hide-xs show-lg"
          >
            <button className="btn-1">Sign Up</button>
            <button className="btn-2">Sign In</button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Header;