import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
  fluidImageContainer,
  fluidImageContent
} from '../../utils/fluidImageContainer';

const Image = ({
  width,
  height = width,
  className,
  src,
  alt,
  ...otherProps
}) => (
  <div className={classnames('App-Image', className)}>
    <div
      className="App-Image-container"
      style={fluidImageContainer(width, height)}
    >
      <img style={fluidImageContent()} src={src} alt={alt} {...otherProps} />
    </div>
  </div>
);

Image.propTypes = {
  className: PropTypes.string,
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

Image.defaultProps = {
  className: null,
  height: 0
};

export default Image;
