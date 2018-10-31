import React from 'react';
import Link from 'next/link';
import Home from '../src/containers/Home';
import AppHOC from '../src/hocs/AppHOC';
import ParticlesWrapper from '../src/components/Particles';

import '../src/styles/LandingPage.scss';

// export default AppHOC(Home, 'home');

const ROUTES = [
  {
    linkTo: '/',
    class: 'Home',
    routeName: 'Home'
  },
  {
    linkTo: '/Blog',
    class: 'Blog',
    routeName: 'Blog'
  },
  {
    linkTo: '/About',
    class: 'About',
    routeName: 'About'
  },
  {
    linkTo: '/Getintouch',
    class: 'Get-in-touch',
    routeName: 'Get In Touch'
  }
];

const LandingPage = () => (
  <div className="App-LandingPage">
    {[0, 1, 2, 3, 4, 5, 6, 7].map(el => (
      <div key={el} className="tilt" />
    ))}
    {ROUTES.map(route => (
      <Link href={route.linkTo}>
        <button
          key={route.routeName}
          type="button"
          className={`button-slanted ${route.class}`}
        >
          {route.routeName}
        </button>
      </Link>
    ))}
    <ParticlesWrapper />
  </div>
);

export default LandingPage;
