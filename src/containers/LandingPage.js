import React from 'react';
import classnames from 'classnames';
import Router, { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { canUseDOM } from 'exenv';

import NavigationHeader from '../components/NavigationHeader';
import ExternalLinks from '../components/ExternalLinks';
import MenuButton from '../components/buttons/MenuButton';
import ButtonIcon from '../components/buttons/ButtonIcon';
import { EXTRA_SMALL } from '../enums/client-dimensions';

const LANDING_PAGE_ROWS = [
  {
    href: 'About',
    linkDisplay: 'About',
    iconName: 'fas fa-info-circle',
    imageSrc:
      'https://i892.photobucket.com/albums/ac124/valkyris/assets/about-img.jpeg',
    imageAlt: 'About'
  },
  {
    href: 'Portfolio',
    linkDisplay: 'Portfolio',
    iconName: 'fas fa-file',
    imageSrc:
      'https://i892.photobucket.com/albums/ac124/valkyris/assets/portfolio-img.jpeg',
    imageAlt: 'Portfolio'
  },
  {
    href: 'Blog',
    linkDisplay: 'Blog',
    iconName: 'fas fa-pen-square',
    imageSrc:
      'https://i892.photobucket.com/albums/ac124/valkyris/assets/blog-img.jpeg',
    imageAlt: 'Blog'
  },
  {
    href: 'Getintouch',
    linkDisplay: 'Contact',
    iconName: 'fas fa-address-card',
    imageSrc:
      'https://i892.photobucket.com/albums/ac124/valkyris/assets/contact-img.jpeg',
    imageAlt: 'Contact'
  }
];

class LandingPage extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    router: PropTypes.object,
    toggleMinifyDesktopMenu: PropTypes.func,
    isMinifiedDesktopMenu: PropTypes.bool,
    isSideNav: PropTypes.bool,
    getCurrentBreakpoint: PropTypes.func
  };

  static defaultProps = {
    className: null,
    router: {},
    toggleMinifyDesktopMenu: () => {},
    isMinifiedDesktopMenu: false,
    isSideNav: false,
    getCurrentBreakpoint: () => {}
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
    this.isNewRoute = true;
  }

  componentDidMount() {
    const route = this.props.router.pathname.split('/')[1];
    this.setState({ [route]: true });
  }

  _onNavigation(href, isInstant) {
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
        let timer;
        if (isInstant) {
          timer = 0;
        } else {
          timer = this.props.isSideNav ? 500 : 2000;
        }
        setTimeout(() => {
          Router.push({
            pathname: `/${href}`,
            query: this.props.router.query.Token
              ? { Token: this.props.router.query.Token }
              : null
          });
        }, timer);
      }
    );
  }

  _generateLandingPageContent() {
    const {
      isMinifiedDesktopMenu,
      isSideNav,
      getCurrentBreakpoint
    } = this.props;

    if (!getCurrentBreakpoint()) {
      return null;
    }
    if (isSideNav || getCurrentBreakpoint() !== EXTRA_SMALL) {
      return (
        <React.Fragment>
          <div
            className={classnames('tilt first-item', {
              /* if sideNav prop exists, that is the internal navBar */
              'side-nav': isSideNav
            })}
          >
            <MenuButton
              className="menu-button-desktop"
              isActive={!isMinifiedDesktopMenu}
              onClick={() => {
                this.props.toggleMinifyDesktopMenu();
                this.isNewRoute = false;
              }}
            />
            <h1>
              <button
                className={classnames('root-nav', {
                  hidden: isMinifiedDesktopMenu
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
                hidden: isMinifiedDesktopMenu
              })}
            />
          </div>
          <div
            className={classnames('navigation-block', {
              hidden: isMinifiedDesktopMenu
            })}
          >
            {LANDING_PAGE_ROWS.map((row, index) => (
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
                {canUseDOM && (
                  <img
                    className={`tilt-img ${row.linkDisplay}`}
                    src={row.imageSrc}
                    alt={row.imageAlt}
                  />
                )}
              </div>
            ))}
          </div>
          <div
            className={classnames('navigation-block', {
              hidden: !isMinifiedDesktopMenu
            })}
          >
            {LANDING_PAGE_ROWS.map(row => (
              <ButtonIcon
                key={row.href}
                className="tilt minified-menu-item"
                callback={() => this._onNavigation(row.href, true)}
                iconName={row.iconName}
                buttonType="borderless"
              />
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
        </React.Fragment>
      );
    }
    return (
      <div className="App-LandingPage-mobile">
        <img className="App-LandingPage-mobile-image" src="../../static/LandingPage/macbook.png" alt="macbook" />
        {LANDING_PAGE_ROWS.map((row, index) => (
          <button
            className={`App-LandingPage-mobile-button button-${index}`}
            type="button"
            key={row.href}
            onClick={() => this._onNavigation(row.href, true)}
          >
            {row.linkDisplay}
          </button>
        ))}
      </div>
    );
  }

  render() {
    const { isMinifiedDesktopMenu } = this.props;
    return (
      <nav
        className={classnames('App-LandingPage', this.props.className, {
          'slide-out': isMinifiedDesktopMenu,
          'slide-in': !isMinifiedDesktopMenu && !this.isNewRoute
        })}
      >
        {this._generateLandingPageContent()}
      </nav>
    );
  }
}

export default withRouter(LandingPage);
