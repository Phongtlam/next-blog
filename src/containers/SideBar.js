import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import classnames from 'classnames';
import { withRouter } from 'next/router';
import ExternalLinks from '../components/ExternalLinks';
import NavigationHeader from '../components/NavigationHeader';

const ROUTES = [
  {
    linkTo: '/',
    class: 'index',
    routeName: 'Landing Page'
  },
  {
    linkTo: '/About',
    class: 'About',
    routeName: 'About'
  },
  {
    linkTo: '/Portfolio',
    class: 'Portfolio',
    routeName: 'Portfolio'
  },
  {
    linkTo: '/Blog',
    class: 'Blog',
    routeName: 'Blog'
  },
  {
    linkTo: '/Getintouch',
    class: 'Get-in-touch',
    routeName: 'Get In Touch'
  }
];

const SideBar = props => (
  <nav className={`${props.className} App-SideBar`}>
    <Link href="/">
      <h1>Phong Lam</h1>
    </Link>
    <NavigationHeader />
    <div className="App-SideBar-router-group">
      {ROUTES.map(
        route =>
          route.linkTo !== '/' && (
            <div
              className={classnames('route', {
                active:
                  props.router.route.split('/')[1] ===
                  route.linkTo.split('/')[1]
              })}
              key={route.linkTo}
            >
              <Link href={route.linkTo}>
                <button className="route-button" type="button">
                  {route.routeName}
                </button>
              </Link>
            </div>
          )
      )}
    </div>
    <div className="external-links">
      <ExternalLinks location="sidebar" className="sidebar" />
    </div>
    <p>©2018 Phong Lam</p>
  </nav>
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
