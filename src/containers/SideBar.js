import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import classnames from 'classnames';
import { withRouter } from 'next/router';
import ExternalLinks from '../components/ExternalLinks';

import '../styles/SideBar.scss';

const ROUTES = [
  {
    linkTo: '/',
    routeName: 'Home'
  },
  {
    linkTo: '/Blog',
    routeName: 'Blog'
  },
  {
    linkTo: '/About',
    routeName: 'About'
  },
  {
    linkTo: '/Getintouch',
    routeName: 'Get In Touch'
  }
];

const SideBar = props => (
  <div className={`${props.className} App-SideBar`}>
    <Link href="/">
      <h1>Phong Lam</h1>
    </Link>
    <p>
      I specialize in making beautiful software and user interfaces. I have a
      passion for all things science and chess AI. When not coding, I love
      reading, writing, listening to music or working out at the gym. Follow my
      journey as a developer or just send me a message to connect.
    </p>
    <div className="App-SideBar-router-group">
      {ROUTES.map(route => (
        <div
          className={classnames('route', {
            active: props.router.route === route.linkTo
          })}
          key={route.linkTo}
        >
          <Link href={route.linkTo}>
            <button className="route-button" type="button">
              {route.routeName}
            </button>
          </Link>
        </div>
      ))}
    </div>
    <ExternalLinks location="sidebar" />
  </div>
);

SideBar.propTypes = {
  className: PropTypes.string
};

SideBar.defaultProps = {
  className: ''
};

export default withRouter(SideBar);
