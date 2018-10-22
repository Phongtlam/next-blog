import React from 'react';
import Particles from 'react-particles-js';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import '../styles/Particles.scss';

const ParticlesWrapper = ({ className }) => (
  <div className={classnames('App-Particles', className)}>
    <Particles
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: false
            }
          },
          color: {
            value: '#000000'
          },
          size: {
            value: 10,
            random: true
          },
          move: {
            direction: 'bottom',
            out_mode: 'out'
          },
          line_linked: {
            enable: false
          }
        }
      }}
    />
  </div>
);

ParticlesWrapper.propTypes = {
  className: PropTypes.string
};

ParticlesWrapper.defaultProps = {
  className: null
};

export default ParticlesWrapper;
