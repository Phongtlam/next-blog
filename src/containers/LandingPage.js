import React from 'react';
import Link from 'next/link';
import ParticlesWrapper from '../components/Particles';
import ROUTES from '../utils/routes';

import '../styles/LandingPage.scss';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="App-LandingPage">
        {[0, 1, 2, 3, 4, 5, 6, 7].map(el => (
          <div key={el} className="tilt" />
        ))}
        {ROUTES.map(
          route =>
            route.linkTo !== '/' && (
              <Link href={route.linkTo} key={route.routeName}>
                <button
                  type="button"
                  className={`button-slanted ${route.class}`}
                >
                  {route.routeName}
                </button>
              </Link>
            )
        )}
        <ParticlesWrapper />
      </div>
    );
  }
}

export default LandingPage;
