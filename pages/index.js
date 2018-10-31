import React from 'react';
import Link from 'next/link';
import ParticlesWrapper from '../src/components/Particles';
import ROUTES from '../src/utils/routes';

import '../src/styles/LandingPage.scss';

const LandingPage = () => (
  <div className="App-LandingPage">
    {[0, 1, 2, 3, 4, 5, 6, 7].map(el => (
      <div key={el} className="tilt" />
    ))}
    {ROUTES.map(route => route.linkTo !== '/' && (
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
