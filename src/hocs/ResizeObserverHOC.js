/* global document ResizeObserver */
import React from 'react';
// import ResizeObserver from 'resize-observer-polyfill';
import { SMALL, MEDIUM, LARGE, EXTRA_LARGE, breakpoints } from '../enums/client-dimensions';

const ResizeObserverHOC = WrappedComponent =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        viewportHeight: 0,
        viewportWidth: 0
      };

      this._getCurrentBreakpoint = this._getCurrentBreakpoint.bind(this);
    }

    componentDidMount() {
      const myObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {
          this.setState({
            viewportHeight: entry.contentRect.height,
            viewportWidth: entry.contentRect.width
          });
        });
      });

      const someEl = document.getElementById('__next');
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

    render() {
      const { viewportHeight, viewportWidth } = this.state;

      return (
        <WrappedComponent
          clientDimensions={{
            viewportHeight,
            viewportWidth,
            getCurrentBreakpoint: this._getCurrentBreakpoint
          }}
          {...this.props}
        />
      );
    }
  };

export default ResizeObserverHOC;
