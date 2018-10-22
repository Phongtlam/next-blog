import React from 'react';
import Head from 'next/head';
import SideBar from '../containers/SideBar';

import '../styles/App.scss';

const navBarHoc = WrappedComponent =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    _method() {
      this.setState({});
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
            <SideBar className="App-sidebar-container" />
            <WrappedComponent className="App-content-container" />
          </div>
        </React.Fragment>
      );
    }
  };

export default navBarHoc;
