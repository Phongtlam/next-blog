import React from 'react';
import PropTypes from 'prop-types';

const NavigationHeader = props => (
  <p className={`App-NavigationHeader ${props.className}`}>
    I specialize in making beautiful software and user interfaces. I have a
    passion for all things science and chess AI. When not coding, I love
    reading, writing, listening to music or working out at the gym. Follow my
    journey as a developer or just send me a message to connect.
  </p>
);

NavigationHeader.propTypes = {
  className: PropTypes.string
};

NavigationHeader.defaultProps = {
  className: null
};

export default NavigationHeader;
