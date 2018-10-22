import React from 'react';
import Head from 'next/head';
import SideBar from '../containers/SideBar';
import { fetchAll } from '../utils/fetch';

import '../styles/App.scss';

import Modal from '../components/Modal';

const INITIAL_MODAL_DATA = {
  isOpen: false,
  message: '',
  confirmText: 'Confirm',
  rejectText: 'Cancel',
  callback: null,
  type: 'primary'
};

const AppHOC = (WrappedComponent, componentType) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        portfolioData: [],
        blogData: [],
        modalData: INITIAL_MODAL_DATA
      };
      this._setHtml = this._setHtml.bind(this);
      this._loadModalData = this._loadModalData.bind(this);
    }

    componentDidMount() {
      Promise.all([fetchAll('portfolio'), fetchAll('post')]).then(
        responseArray => {
          this.setState({
            portfolioData: responseArray[0].sort((a, b) => a.order < b.order),
            blogData: responseArray[1]
          });
        }
      );
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

    _setHtml(type, htmlsData, editMode = false) {
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
          ].sort((a, b) => a.order < b.order)
        }));
      } else {
        this.setState(prevState => ({
          [htmlType]: prevState[htmlType]
            .concat(htmlsData)
            .sort((a, b) => a.order < b.order)
        }));
      }
    }

    _injectComponentProps(type) {
      let dataProps = {
        setHtml: this._setHtml,
        loadModalData: this._loadModalData,
        appData: {}
      };
      switch (type) {
        case 'home':
          dataProps.appData = this.state.portfolioData;
          break;
        case 'blog':
          dataProps.appData = this.state.blogData;
          break;
        default:
          dataProps = {};
      }
      return (
        <WrappedComponent {...dataProps} className="App-content-container" />
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
          </Head>
          <div className="App">
            <Modal modalData={this.state.modalData} />
            <SideBar className="App-sidebar-container" />
            {this._injectComponentProps(componentType)}
          </div>
        </React.Fragment>
      );
    }
  };

export default AppHOC;
