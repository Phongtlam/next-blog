import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import classnames from 'classnames';
import { withRouter } from 'next/router';
import ExternalLinks from '../components/ExternalLinks';
import ROUTES from '../utils/routes';

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
      {ROUTES.map(route => route.linkTo !== '/' && (
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
    <div className="external-links">
      <ExternalLinks location="sidebar" />
    </div>
    <p>©2018 Phong Lam</p>
  </div>
);

SideBar.propTypes = {
  className: PropTypes.string,
  router: PropTypes.shape({
    route: PropTypes.string
  })
};

SideBar.defaultProps = {
  className: '',
  router: {}
};

export default withRouter(SideBar);
