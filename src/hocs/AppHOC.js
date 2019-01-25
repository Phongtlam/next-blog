/* global document */

import React from 'react';
import Head from 'next/head';
import classnames from 'classnames';
import ResizeObserver from 'resize-observer-polyfill';

import SideBar from '../containers/SideBar';
import { fetchAll } from '../utils/fetch';
import { PORTFOLIO_TYPE, BLOG_TYPE } from '../enums/api-routes';
import { BLOG, PORTFOLIO, LANDING } from '../enums/page-types';
import {
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

const AppHOC = (WrappedComponent, componentType) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        portfolioData: [],
        blogData: {},
        modalData: INITIAL_MODAL_DATA,
        markdownFormData: INITIAL_MARKDOWN_FORM_DATA,
        htmlParserData: '',
        isMenuOpen: false,
        Token: null
      };
      this._setAppData = this._setAppData.bind(this);
      this._loadModalData = this._loadModalData.bind(this);
      this._loadMarkdownFormData = this._loadMarkdownFormData.bind(this);
      this._getCurrentBreakpoint = this._getCurrentBreakpoint.bind(this);
    }

    // static async getInitialProps() {
    //   if (componentType === PORTFOLIO || componentType === 'blog') {
    //     const dataType =
    //       componentType === PORTFOLIO ? 'portfolioData' : 'blogData';

    //     const response = await fetchAll(
    //       dataType === 'portfolioData' ? PORTFOLIO_TYPE : BLOG_TYPE
    //     );
    //     return {
    //       [dataType]: response[dataType]
    //     };
    //   }

    //   return {};
    // }

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
      this._createResizeObserver();
    }

    _createResizeObserver() {
      const myObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {
          this.setState({
            viewportHeight: entry.contentRect.height,
            viewportWidth: entry.contentRect.width
          });
        });
      });

      const someEl = document.getElementById('App-PhongLam');
      myObserver.observe(someEl);
    }

    _getCurrentBreakpoint() {
      const { viewportWidth } = this.state;
      let currentBreakpoint = SMALL;
      if (viewportWidth >= breakpoints[EXTRA_LARGE]) {
        currentBreakpoint = EXTRA_LARGE;
      } else if (viewportWidth >= breakpoints[LARGE]) {
        currentBreakpoint = LARGE;
      } else if (viewportWidth >= breakpoints[MEDIUM]) {
        currentBreakpoint = MEDIUM;
      } else {
        currentBreakpoint = SMALL;
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
        viewportWidth
      } = this.state;

      let dataProps = {
        setAppData: this._setAppData,
        loadModalData: this._loadModalData,
        loadMarkdownFormData: this._loadMarkdownFormData,
        appData: {},
        '_data-type': type,
        Token
      };
      switch (type) {
        case PORTFOLIO:
          dataProps.appData = portfolioData;
          dataProps.isCreateBtnHidden =
            markdownFormData.isOpen || htmlParserData !== '';
          dataProps.isBackBtnHidden = htmlParserData === '';
          break;
        case BLOG:
          dataProps.appData = blogData;
          break;
        case LANDING:
          dataProps = {
            ClientDimensions: {
              viewportHeight,
              viewportWidth
            },
            getCurrentBreakpoint: this._getCurrentBreakpoint
          };
          break;
        default:
          dataProps = {};
      }
      return (
        <React.Fragment>
          {componentType && (
            <React.Fragment>
              {type === PORTFOLIO && (
                <React.Fragment>
                  <Modal modalData={modalData} />
                  <MarkdownForm
                    loadMarkdownFormData={this._loadMarkdownFormData}
                    setAppData={this._setAppData}
                    markdownFormData={markdownFormData}
                    Token={Token}
                  />
                </React.Fragment>
              )}
            </React.Fragment>
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

    render() {
      return (
        <React.Fragment>
          <Head>
            <link
              rel="stylesheet"
              href="https://use.fontawesome.com/releases/v5.4.1/css/all.css"
              integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz"
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
                <SideBar
                  className={classnames('App-sidebar-container', {
                    active: this.state.isMenuOpen
                  })}
                />
                <LandingPage className="App-landing-page-navigation" />
              </React.Fragment>
            )}
            <div className="App-main-content-container">
              {componentType !== LANDING && (
                <button
                  className="menu-button hide-content-l"
                  type="button"
                  onClick={() => {
                    this.setState(prevState => ({
                      isMenuOpen: !prevState.isMenuOpen
                    }));
                  }}
                >
                  <MenuButton
                    className="menu-button-hamburger"
                    isActive={this.state.isMenuOpen}
                    onClick={() => {}}
                  />
                  <span className="menu-button-text">
                    {this.state.isMenuOpen ? 'Close' : 'Menu'}
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
