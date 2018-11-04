import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const EXTERNAL_ROUTES = [
  {
    url: 'mailto:phongtlam@gmail.com',
    icon: 'fas fa-envelope'
  },
  {
    url: 'https://github.com/Phongtlam',
    icon: 'fab fa-github'
  },
  {
    url: 'https://www.linkedin.com/in/phongtlam/',
    icon: 'fab fa-linkedin-in'
  },
  {
    url: 'https://angel.co/phongtlam',
    icon: 'fab fa-angellist'
  },
  {
    url: 'https://soundcloud.com/phong-twitch-lam',
    icon: 'fab fa-soundcloud'
  }
];

const ExternalLinks = ({ location, className }) => (
  <div className={`App-ExternalLinks ${className}`}>
    {EXTERNAL_ROUTES.map(route => (
      <a
        key={route.url}
        className={classnames('external-link', location)}
        href={route.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className={classnames(route.icon, {
            'fa-2x': location === 'getintouch'
          })}
        />
      </a>
    ))}
  </div>
);

ExternalLinks.propTypes = {
  location: PropTypes.oneOf(['sidebar', 'getintouch']),
  className: PropTypes.string
};

ExternalLinks.defaultProps = {
  location: 'sidebar',
  className: null
};

export default ExternalLinks;
