import React, { lazy, Suspense } from 'react';
import classnames from 'classnames';
import Router, { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { canUseDOM } from 'exenv';

import '../styles/LandingPage.scss';
import NavigationHeader from '../components/NavigationHeader';
import ExternalLinks from '../components/ExternalLinks';
import MenuButton from '../components/buttons/MenuButton';
import ButtonIcon from '../components/buttons/ButtonIcon';

const LazyImage = lazy(() => import('../components/Image'));

const LANDING_PAGE_ROWS = [
  {
    href: 'About',
    linkDisplay: 'About',
    imageSrc:
      'https://i892.photobucket.com/albums/ac124/valkyris/assets/about-img.jpeg',
    imageAlt: 'About'
  },
  {
    href: 'Portfolio',
    linkDisplay: 'Portfolio',
    imageSrc:
      'https://i892.photobucket.com/albums/ac124/valkyris/assets/portfolio-img.jpeg',
    imageAlt: 'Portfolio'
  },
  {
    href: 'Blog',
    linkDisplay: 'Blog',
    imageSrc:
      'https://i892.photobucket.com/albums/ac124/valkyris/assets/blog-img.jpeg',
    imageAlt: 'Blog'
  },
  {
    href: 'Getintouch',
    linkDisplay: 'Contact',
    imageSrc:
      'https://i892.photobucket.com/albums/ac124/valkyris/assets/contact-img.jpeg',
    imageAlt: 'Contact'
  }
];

const MINIFIED_MENU = [
  {
    href: 'About',
    iconName: 'fas fa-info-circle',
    imageAlt: 'About'
  },
  {
    href: 'Portfolio',
    iconName: 'fas fa-file',
    imageAlt: 'Portfolio'
  },
  {
    href: 'Blog',
    iconName: 'fas fa-pen-square',
    imageAlt: 'Blog'
  },
  {
    href: 'Getintouch',
    iconName: 'fas fa-address-card',
    imageAlt: 'Contact'
  }
];

class LandingPage extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    router: PropTypes.object,
    toggleMinifyDesktopMenu: PropTypes.func,
    isMinifiedDesktopMenu: PropTypes.bool
  };

  static defaultProps = {
    className: null,
    router: {},
    toggleMinifyDesktopMenu: () => {},
    isMinifiedDesktopMenu: false
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      About: false,
      Portfolio: false,
      Blog: false,
      Getintouch: false,
      disabled: false,
      viewportHeight: 0,
      viewportWidth: 0
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
          timer = this.props.className ? 500 : 2000;
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

  render() {
    const { isMinifiedDesktopMenu } = this.props;
    return (
      <div
        className={classnames('App-LandingPage', this.props.className, {
          'slide-out': isMinifiedDesktopMenu,
          'slide-in': !isMinifiedDesktopMenu && !this.isNewRoute
        })}
      >
        <div
          className={classnames('tilt first-item', {
            'side-nav': this.props.className
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
                <Suspense fallback={<div>{row.imageAlt}</div>}>
                  <LazyImage
                    className={`tilt-img ${row.linkDisplay}`}
                    src={row.imageSrc}
                    alt={row.imageAlt}
                  />
                </Suspense>
              )}
            </div>
          ))}
        </div>
        <div
          className={classnames('navigation-block', {
            hidden: !isMinifiedDesktopMenu
          })}
        >
          {MINIFIED_MENU.map(row => (
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
      </div>
    );
  }
}

export default withRouter(LandingPage);
