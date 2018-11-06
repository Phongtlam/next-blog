import React from 'react';
import PropTypes from 'prop-types';
import Router, { withRouter } from 'next/router';
import ButtonIcon from '../components/ButtonIcon';
import { createNewAdmin } from '../utils/fetch';
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
      adminEmail: '',
      adminPassword: '',
      displayMessage: '',
      isCreateAccount: false
    };

    this._onChange = this._onChange.bind(this);
    this._onCreateNewAdminUser = this._onCreateNewAdminUser.bind(this);
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
      this.setState({ adminEmail: e.target.value });
    } else {
      this.setState({ adminPassword: e.target.value });
    }
  }

  _onCreateNewAdminUser() {
    createNewAdmin({
      admin: {
        email: this.state.adminEmail,
        password: this.state.adminPassword
      }
    }).then(res => {
      this.setState({
        displayMessage: JSON.stringify(res)
      });
    }).catch(err => {
      this.setState({
        displayMessage: JSON.stringify(err)
      });
    });
  }

  render() {
    return (
      <form className="App-Admin">
        {this.state.displayMessage}
        <label className="App-Admin-label" htmlFor="admin-username">
          Name:
          <input
            id="admin-username"
            type="text"
            value={this.state.adminEmail}
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
          callback={this._onCreateNewAdminUser}
          iconName="fas fa-sign-in-alt"
        >
          {this.state.isCreateAccount ? 'Create New Admin' : 'Login'}
        </ButtonIcon>
      </form>
    );
  }
}

export default withRouter(Admin);
