import React from 'react';
import classnames from 'classnames';
import Router, { withRouter } from 'next/router';
import PropTypes from 'prop-types';
// import ParticlesWrapper from '../components/Particles';

import '../styles/LandingPage.scss';
import NavigationHeader from '../components/NavigationHeader';
import ExternalLinks from '../components/ExternalLinks';

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
  static propTypes = {
    className: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    router: PropTypes.object
  };

  static defaultProps = {
    className: null,
    router: {}
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      About: false,
      Portfolio: false,
      Blog: false,
      Getintouch: false,
      disabled: false
    };

    this._onNavigation = this._onNavigation.bind(this);
  }

  componentDidMount() {
    const route = this.props.router.pathname.split('/')[1];
    this.setState({ [route]: true });
  }

  _onNavigation(href) {
    this.setState(
      prevState => {
        const state = Object.keys(prevState).reduce((newState, key) => {
          if (key === 'disabled') {
            // eslint-disable-next-line no-param-reassign
            newState[key] = prevState.disabled;
          } else if (key === href) {
            // eslint-disable-next-line no-param-reassign
            newState[key] = true;
          } else {
            // eslint-disable-next-line no-param-reassign
            newState[key] = false;
          }
          return newState;
        }, {});
        return state;
      },
      () => {
        setTimeout(() => {
          // Router.push(`/${href}`);
          Router.push({
            pathname: `/${href}`,
            query: this.props.router.query
          });
        }, this.props.className ? 500 : 2000);
      }
    );
  }

  render() {
    return (
      <div className={classnames('App-LandingPage', this.props.className)}>
        <div
          className={classnames('tilt first-item', {
            'side-nav': this.props.className
          })}
        >
          <h1>
            <button
              className="root-nav"
              type="button"
              onClick={() =>
                Router.push({
                  pathname: '/',
                  query: this.props.router.query
                })
              }
            >
              Phong Lam
            </button>
          </h1>
          <NavigationHeader />
        </div>
        {LANDING_PAGE_ROW.map((row, index) => (
          <div
            key={row.href}
            className={classnames('tilt content', {
              transition: this.state[row.href],
              [`animate-div-${index}`]: !this.props.className
            })}
          >
            <button
              type="button"
              disabled={
                this.state.disabled ||
                this.props.router.pathname === `/${row.href}`
              }
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
        <div
          className={classnames('tilt last-item', {
            'animate-div-4': !this.props.className
          })}
        >
          <ExternalLinks
            className={classnames('external-links', {
              hidden: !this.props.className
            })}
          />
        </div>
        {/* <ParticlesWrapper /> */}
      </div>
    );
  }
}

export default withRouter(LandingPage);
