import React from 'react';
import PropTypes from 'prop-types';
import Router, { withRouter } from 'next/router';
import ButtonIcon from '../components/ButtonIcon';
import { logIn } from '../utils/fetch';
import {
  adminQueryKey,
  adminQueryValue,
  adminQueryKeyCreate,
  adminQueryValueCreate
} from '../../app-secrets/admin-helpers';

import '../styles/Admin.scss';

class Admin extends React.Component {
  static propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    router: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      adminUsername: '',
      adminPassword: '',
      isCreateAccount: false
    };

    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    this.checkAuthorization();
  }

  checkAuthorization() {
    const { query } = this.props.router;
    if (query[adminQueryKey] !== adminQueryValue) {
      Router.push('/');
    }
    if (query[adminQueryKeyCreate] === adminQueryValueCreate) {
      this.setState({ isCreateAccount: true });
    }
  }

  _onChange(e) {
    if (e.target.id === 'admin-username') {
      this.setState({ adminUsername: e.target.value });
    } else {
      this.setState({ adminPassword: e.target.value });
    }
  }

  render() {
    return (
      <form className="App-Admin">
        <label className="App-Admin-label" htmlFor="admin-username">
          Name:
          <input
            id="admin-username"
            type="text"
            value={this.state.adminUsername}
            onChange={this._onChange}
          />
        </label>
        <label className="App-Admin-label" htmlFor="admin-password">
          Password:
          <input
            id="admin-password"
            type="text"
            value={this.state.adminPassword}
            onChange={this._onChange}
          />
        </label>
        <ButtonIcon
          buttonType="primary"
          callback={this._onSubmit}
          iconName="fas fa-sign-in-alt"
        >
          {this.state.isCreateAccount ? 'Create New Admin' : 'Login'}
        </ButtonIcon>
      </form>
    );
  }
}

export default withRouter(Admin);
