import React from 'react';
import Head from 'next/head';
import classnames from 'classnames';

import SideBar from '../containers/SideBar';
import { fetchAll } from '../utils/fetch';

import '../styles/index.scss';

import Modal from '../components/Modal';
import MarkdownForm from '../components/MarkdownForm';
import HtmlParser from '../components/HtmlParser';
import ButtonIcon from '../components/ButtonIcon';
import INITIAL_MARKDOWN_FORM_DATA from '../utils/initialStateMarkdown';

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

const AppHOC = (WrappedComponent, componentType) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        portfolioData: [],
        blogData: [],
        modalData: INITIAL_MODAL_DATA,
        markdownFormData: INITIAL_MARKDOWN_FORM_DATA,
        htmlParserData: '',
        isMenuOpen: false
      };
      this._setAppData = this._setAppData.bind(this);
      this._loadModalData = this._loadModalData.bind(this);
      this._loadMarkdownFormData = this._loadMarkdownFormData.bind(this);
      this._loadHtmlParser = this._loadHtmlParser.bind(this);
      this._loadInitialData();
    }

    _loadInitialData() {
      if (componentType === 'portfolio' || componentType === 'blog') {
        Promise.all([fetchAll('portfolio'), fetchAll('post')]).then(
          responseArray => {
            this.setState({
              portfolioData: responseArray[0].sort((a, b) => b.order - a.order),
              blogData: responseArray[1]
            });
          }
        );
      }
    }

    _loadModalData({ callback, cancelCallback, ...otherProps }) {
      this.setState({
        modalData: {
          ...INITIAL_MODAL_DATA,
          isOpen: true,
          resolver: () =>
            Promise.resolve(callback()).then(res => {
              this.setState(prevState => ({
                modalData: INITIAL_MODAL_DATA,
                portfolioData: res.portfolio
                  ? prevState.portfolioData.filter(el => el._id !== res._id)
                  : prevState.portfolioData,
                blogData: res.blog
                  ? prevState.blogData.filter(el => el._id !== res._id)
                  : prevState.blogData
              }));
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
      const htmlType = type === 'portfolio' ? 'portfolioData' : 'blogData';
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
        htmlParserData
      } = this.state;

      let dataProps = {
        setAppData: this._setAppData,
        loadModalData: this._loadModalData,
        loadMarkdownFormData: this._loadMarkdownFormData,
        loadHtmlParser: this._loadHtmlParser,
        appData: {}
      };
      switch (type) {
        case 'portfolio':
          dataProps.appData = portfolioData;
          dataProps.isCreateBtnHidden =
            markdownFormData.isOpen || htmlParserData !== '';
          dataProps.isBackBtnHidden = htmlParserData === '';
          break;
        case 'blog':
          dataProps.appData = blogData;
          break;
        default:
          dataProps = {};
      }
      return (
        <React.Fragment>
          {componentType && (
            <React.Fragment>
              <Modal modalData={modalData} />
              <MarkdownForm
                loadMarkdownFormData={this._loadMarkdownFormData}
                setAppData={this._setAppData}
                markdownFormData={markdownFormData}
              />
              <HtmlParser
                className={`App-${type}`}
                htmlParserData={htmlParserData}
              />
            </React.Fragment>
          )}
          <WrappedComponent {...dataProps} className="App-content-container" />
        </React.Fragment>
      );
    }

    _loadHtmlParser(markdownText) {
      this.setState({
        htmlParserData: markdownText
      });
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
          <div className="App">
            <SideBar
              className={classnames('App-sidebar-container', {
                active: this.state.isMenuOpen
              })}
            />
            <div className="App-main-content-container">
              <ButtonIcon
                className="menu-button hide-content-s"
                iconName="fas fa-bars"
                buttonType={this.state.isMenuOpen ? 'normal' : 'primary'}
                callback={() => {
                  this.setState(prevState => ({
                    isMenuOpen: !prevState.isMenuOpen
                  }));
                }}
              >
                Menu
              </ButtonIcon>
              {this._injectComponentProps(componentType)}
            </div>
          </div>
        </React.Fragment>
      );
    }
  };

export default AppHOC;
