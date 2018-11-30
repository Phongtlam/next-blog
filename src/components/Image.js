import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ className, alt, src }) => (
  <img className={className} alt={alt} src={src} />
);

Image.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string
};

Image.defaultProps = {
  className: '',
  alt: '',
  src: ''
};

export default Image;
