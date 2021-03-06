import React from 'react';
import Head from 'next/head';
import classnames from 'classnames';
import { canUseDOM } from 'exenv';
import ResizeObserver from 'resize-observer-polyfill';

import SideBar from '../containers/SideBar';
import { fetchAll } from '../utils/fetch';
import { PORTFOLIO_TYPE, BLOG_TYPE } from '../enums/api-routes';
import { BLOG, PORTFOLIO, LANDING } from '../enums/page-types';
import {
  EXTRA_SMALL,
  SMALL,
  MEDIUM,
  LARGE,
  EXTRA_LARGE,
  breakpoints
} from '../enums/client-dimensions';

import '../styles/index.scss';

import Modal from '../components/Modal';
import MarkdownForm from '../components/MarkdownForm';
import LandingPage from '../containers/LandingPage';
import MenuButton from '../components/buttons/MenuButton';

if (canUseDOM) {
  // eslint-disable-next-line global-require
  require('intersection-observer');
}

const INITIAL_MODAL_DATA = {
  isOpen: false,
  message: '',
  confirmText: 'Confirm',
  rejectText: 'Cancel',
  callback: () => {},
  resolver: Promise,
  rejecter: () => {},
  type: 'primary'
};

const INITIAL_MARKDOWN_FORM_DATA = {
  isOpen: false,
  type: PORTFOLIO_TYPE,
  markdownTexts: '',
  title: '',
  order: 0,
  date: '',
  coverImgUrl: '',
  action: null,
  _id: null
};

const AppHOC = (
  WrappedComponent,
  componentType,
  { isMinifiedDesktopMenuAtStart } = { isMinifiedDesktopMenuAtStart: false }
) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        portfolioData: [],
        blogData: {},
        modalData: INITIAL_MODAL_DATA,
        markdownFormData: INITIAL_MARKDOWN_FORM_DATA,
        htmlParserData: '',
        isSideMenuOpen: false,
        isMinifiedDesktopMenu: isMinifiedDesktopMenuAtStart,
        Token: null,
      };
      this.AppRef = React.createRef();
      this.ResizeObserver = null;
      this._setAppData = this._setAppData.bind(this);
      this._loadModalData = this._loadModalData.bind(this);
      this._loadMarkdownFormData = this._loadMarkdownFormData.bind(this);
      this._getCurrentBreakpoint = this._getCurrentBreakpoint.bind(this);
      this._toggleSideMenu = this._toggleSideMenu.bind(this);
      this._toggleMinifyDesktopMenu = this._toggleMinifyDesktopMenu.bind(this);
    }

    static getDerivedStateFromProps(props) {
      if (props.blogData) {
        return {
          blogData: props.blogData
        };
      }

      if (props.portfolioData) {
        return {
          portfolioData: props.portfolioData
        };
      }

      return null;
    }

    componentDidMount() {
      this._loadInitialData();
      this._getToken();
      if (canUseDOM) {
        this._createResizeObserver();
      }
    }

    componentWillUnmount() {
      this.ResizeObserver.unobserve(this.AppRef.current);
    }

    _createResizeObserver() {
      this.ResizeObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {
          this.setState({
            viewportHeight: entry.contentRect.height,
            viewportWidth: entry.contentRect.width
          });
        });
      });

      this.ResizeObserver.observe(this.AppRef.current);
    }

    _getCurrentBreakpoint() {
      const { viewportWidth } = this.state;
      let currentBreakpoint;
      if (viewportWidth >= breakpoints[EXTRA_LARGE]) {
        currentBreakpoint = EXTRA_LARGE;
      } else if (viewportWidth >= breakpoints[LARGE]) {
        currentBreakpoint = LARGE;
      } else if (viewportWidth >= breakpoints[MEDIUM]) {
        currentBreakpoint = MEDIUM;
      } else if (viewportWidth >= breakpoints[SMALL]) {
        currentBreakpoint = SMALL;
      } else if (viewportWidth < breakpoints[SMALL]) {
        currentBreakpoint = EXTRA_SMALL;
      }
      return currentBreakpoint;
    }

    _loadInitialData() {
      if (componentType === PORTFOLIO || componentType === 'blog') {
        const dataType =
          componentType === PORTFOLIO ? 'portfolioData' : 'blogData';

        fetchAll(
          dataType === 'portfolioData' ? PORTFOLIO_TYPE : BLOG_TYPE
        ).then(response => {
          this.setState({
            [dataType]: response[dataType]
          });
        });
      }
    }

    _getToken() {
      // eslint-disable-next-line no-undef
      const currentLoc = window.location.href;
      if (currentLoc.split('?').length > 1) {
        const queryString = currentLoc
          .split('?')[1]
          .split('&')[0]
          .split('=');
        this.setState({
          Token: queryString[1]
        });
      }
    }

    _loadModalData({ callback, cancelCallback, ...otherProps }) {
      this.setState({
        modalData: {
          ...INITIAL_MODAL_DATA,
          isOpen: true,
          resolver: () =>
            Promise.resolve(callback()).then(res => {
              this.setState({
                modalData: INITIAL_MODAL_DATA,
                portfolioData: res.portfolioData
              });
            }),
          rejecter: () => {
            if (cancelCallback) {
              cancelCallback();
            }
            this.setState({
              modalData: INITIAL_MODAL_DATA
            });
          },
          ...otherProps
        }
      });
    }

    _loadMarkdownFormData(markdownData) {
      this.setState({
        markdownFormData: {
          ...INITIAL_MARKDOWN_FORM_DATA,
          ...markdownData
        }
      });
    }

    _setAppData(type, htmlsData, editMode = false) {
      const htmlType = type === PORTFOLIO_TYPE ? 'portfolioData' : 'blogData';
      if (editMode) {
        const indexToReplace = this.state[htmlType].findIndex(
          el => el._id === htmlsData._id
        );
        this.setState(prevState => ({
          [htmlType]: [
            ...prevState[htmlType].slice(0, indexToReplace),
            htmlsData,
            ...prevState[htmlType].slice(indexToReplace + 1)
          ].sort((a, b) => b.order - a.order)
        }));
      } else {
        this.setState(prevState => ({
          [htmlType]: prevState[htmlType]
            .concat(htmlsData)
            .sort((a, b) => b.order - a.order)
        }));
      }
    }

    _injectComponentProps(type) {
      const {
        portfolioData,
        markdownFormData,
        blogData,
        modalData,
        htmlParserData,
        Token,
        viewportHeight,
        viewportWidth,
        isSideMenuOpen
      } = this.state;

      let dataProps = {
        ClientDimensions: {
          viewportHeight,
          viewportWidth
        },
        getCurrentBreakpoint: this._getCurrentBreakpoint
      };

      const portFolioAndBlogControllerAdminProps = {
        setAppData: this._setAppData,
        loadModalData: this._loadModalData,
        loadMarkdownFormData: this._loadMarkdownFormData,
        appData: {},
        '_data-type': type,
        Token
      };

      switch (type) {
        case PORTFOLIO:
          dataProps = {
            ...dataProps,
            ...portFolioAndBlogControllerAdminProps,
            appData: portfolioData,
            isCreateBtnHidden: markdownFormData.isOpen || htmlParserData !== '',
            isBackBtnHidden: htmlParserData === '',
            isSideMenuOpen
          };
          break;
        case BLOG:
          dataProps = {
            ...dataProps,
            ...portFolioAndBlogControllerAdminProps,
            appData: blogData,
            isSideMenuOpen
          };
          break;
        case LANDING:
          break;
        default:
          break;
      }

      return (
        <React.Fragment>
          {componentType &&
            type === PORTFOLIO && (
              <React.Fragment>
                <Modal modalData={modalData} />
                <MarkdownForm
                  loadMarkdownFormData={this._loadMarkdownFormData}
                  setAppData={this._setAppData}
                  markdownFormData={markdownFormData}
                  Token={Token}
                />
              </React.Fragment>
              // eslint-disable-next-line
            )}
          <WrappedComponent
            {...dataProps}
            className={classnames({
              'App-content-container': componentType !== LANDING
            })}
          />
        </React.Fragment>
      );
    }

    _toggleSideMenu() {
      this.setState(prevState => ({
        isSideMenuOpen: !prevState.isSideMenuOpen
      }));
    }

    _toggleMinifyDesktopMenu() {
      this.setState(prevState => ({
        isMinifiedDesktopMenu: !prevState.isMinifiedDesktopMenu
      }));
    }

    render() {
      const { isMinifiedDesktopMenu, isSideMenuOpen } = this.state;
      return (
        <React.Fragment>
          <Head>
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
              integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
              crossOrigin="anonymous"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
          </Head>
          <div className="App" id="App-PhongLam">
            {componentType !== LANDING && (
              <React.Fragment>
                {/* fragment blog for sideNav */}
                <SideBar
                  className={classnames('App-sidebar-container', {
                    active: isSideMenuOpen
                  })}
                />
                <LandingPage
                  className="App-landing-page-navigation"
                  isSideNav
                  toggleMinifyDesktopMenu={this._toggleMinifyDesktopMenu}
                  isMinifiedDesktopMenu={isMinifiedDesktopMenu}
                />
              </React.Fragment>
            )}
            <div
              className={classnames(
                'App-main-content-container',
                `App-main-content-container-${componentType || 'basic'}`,
                {
                  'App-main-content-container-expanded': isMinifiedDesktopMenu
                }
              )}
            >
              <div
                className={classnames('App-sidebar-overlay', {
                  'App-sidebar-overlay-active': isSideMenuOpen
                })}
                ref={this.AppRef}
                role="button"
                tabIndex={0}
                onKeyDown={this._toggleSideMenu}
                onClick={this._toggleSideMenu}
              />
              {componentType !== LANDING && (
                <button
                  className="menu-button hide-content-l"
                  type="button"
                  onClick={this._toggleSideMenu}
                >
                  <MenuButton
                    className="menu-button-hamburger"
                    isActive={isSideMenuOpen}
                    onClick={() => {}}
                  />
                  <span className="menu-button-text">
                    {isSideMenuOpen ? 'Close' : 'Menu'}
                  </span>
                </button>
              )}
              {this._injectComponentProps(componentType)}
            </div>
          </div>
        </React.Fragment>
      );
    }
  };

export default AppHOC;
