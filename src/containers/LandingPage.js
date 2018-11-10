import React from 'react';
import classnames from 'classnames';
import Router, { withRouter } from 'next/router';
import PropTypes from 'prop-types';

import '../styles/LandingPage.scss';
import NavigationHeader from '../components/NavigationHeader';
import ExternalLinks from '../components/ExternalLinks';
import MenuButton from '../components/buttons/MenuButton';

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
      disabled: false,
      isNavOpen: true
    };

    this._onNavigation = this._onNavigation.bind(this);
    this.isNewRoute = true;
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
            newState[key] = prevState[key];
          }
          return newState;
        }, {});
        return state;
      },
      () => {
        setTimeout(() => {
          Router.push({
            pathname: `/${href}`,
            query: this.props.router.query.Token
              ? { Token: this.props.router.query.Token }
              : null
          });
        }, this.props.className ? 500 : 2000);
      }
    );
  }

  render() {
    return (
      <div
        className={classnames('App-LandingPage', this.props.className, {
          'slide-out': !this.state.isNavOpen,
          'slide-in': this.state.isNavOpen && !this.isNewRoute
        })}
      >
        <div
          className={classnames('tilt first-item', {
            'side-nav': this.props.className
          })}
        >
          <MenuButton
            className="menu-button-desktop"
            isActive={this.state.isNavOpen}
            onClick={() => {
              this.isNewRoute = false;
              this.setState(prevState => ({
                isNavOpen: !prevState.isNavOpen
              }));
            }}
          />
          <h1>
            <button
              className={classnames('root-nav', {
                hidden: !this.state.isNavOpen
              })}
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
          <NavigationHeader
            className={classnames('header-text', {
              hidden: !this.state.isNavOpen
            })}
          />
        </div>
        <div
          className={classnames('navigation-block', {
            hidden: !this.state.isNavOpen
          })}
        >
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
        </div>
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
      </div>
    );
  }
}

export default withRouter(LandingPage);
