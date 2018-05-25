import React from 'react';
import Guides from 'react-guides';
import Header from '../Header';
import Section1 from '../Section1';
import Section2 from '../Section2';
import Section3 from '../Section3';
import Section4 from '../Section4';
import Section5 from '../Section5';
import Section6 from '../Section6';
import Footer from '../Footer';
import PropTypes from 'prop-types';

const Home = props => {
  return (
    <div className="home-page ">
      <div className="stars">
        <div className="twinkling">
          <div className="app-bg">
            <Header />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;