import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Blog extends React.Component {
  static propTypes = {
    blogData: PropTypes.arrayOf(PropTypes.object),
    setAppData: PropTypes.func
  };

  static defaultProps = {
    blogData: [],
    setAppData: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      openMarkDownForm: false
    };
    this._onToggleMarkDownForm = this._onToggleMarkDownForm.bind(this);
  }

  _onToggleMarkDownForm(isOpen) {
    this.setState({ openMarkDownForm: isOpen });
  }

  render() {
    return <div className="App-Blog">Hello</div>;
  }
}

export default Blog;
