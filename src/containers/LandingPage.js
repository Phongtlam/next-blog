import React from 'react';
import classnames from 'classnames';
import Router from 'next/router';
import ParticlesWrapper from '../components/Particles';

import '../styles/LandingPage.scss';

const LANDING_PAGE_ROW = [
  {
    href: 'About',
    linkDisplay: 'About',
    imageSrc: '../../static/about-img.jpeg',
    imageAlt: 'About'
  },
  {
    href: 'Portfolio',
    linkDisplay: 'Portfolio',
    imageSrc: '../../static/portfolio-img.jpeg',
    imageAlt: 'Portfolio'
  },
  {
    href: 'Blog',
    linkDisplay: 'Blog',
    imageSrc: '../../static/blog-img.jpeg',
    imageAlt: 'Blog'
  },
  {
    href: 'Getintouch',
    linkDisplay: 'Contact',
    imageSrc: '../../static/contact-img.jpeg',
    imageAlt: 'Contact'
  }
];

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      About: false,
      Portfolio: false,
      Blog: false,
      Getintouch: false,
      disabled: false
    };

    this._onNavigation = this._onNavigation.bind(this);
  }

  _onNavigation(href) {
    this.setState(
      {
        [href]: true,
        disabled: true
      },
      () => {
        setTimeout(() => {
          Router.push(`/${href}`);
        }, 2000);
      }
    );
  }

  render() {
    return (
      <div className="App-LandingPage">
        <div className="tilt" />
        {LANDING_PAGE_ROW.map(row => (
          <div
            className={classnames('tilt content', {
              transition: this.state[row.href],
            })}
          >
            <button
              type="button"
              disabled={this.state.disabled}
              className={`tilt-title ${row.linkDisplay}`}
              onClick={() => this._onNavigation(row.href)}
            >
              {row.linkDisplay}
            </button>
            <img
              className={`tilt-img ${row.linkDisplay}`}
              src={row.imageSrc}
              alt={row.imageAlt}
            />
          </div>
        ))}
        <div className="tilt last-item" />
        {/* <ParticlesWrapper /> */}
      </div>
    );
  }
}

export default LandingPage;
