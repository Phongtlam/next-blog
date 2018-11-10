import React from 'react';
import PropTypes from 'prop-types';
import Router, { withRouter } from 'next/router';
import ButtonIcon from '../components/buttons/ButtonIcon';
import { createNewAdmin, loginAsAdmin } from '../utils/fetch';
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
    this._onAdminLogin = this._onAdminLogin.bind(this);
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
    })
      .then(({ admin }) => {
        this.setState({
          displayMessage: `${admin.email} has been created`
        });
      })
      .catch(err => {
        this.setState({
          displayMessage: JSON.stringify(err)
        });
      });
  }

  _onAdminLogin() {
    loginAsAdmin({
      admin: {
        email: this.state.adminEmail,
        password: this.state.adminPassword
      }
    })
      .then(response => {
        if (response && response.admin && response.admin.token) {
          Router.push({
            pathname: '/',
            query: { Token: response.admin.token }
          });
        }
      })
      .catch(err => {
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
          callback={
            this.state.isCreateAccount
              ? this._onCreateNewAdminUser
              : this._onAdminLogin
          }
          iconName="fas fa-sign-in-alt"
        >
          {this.state.isCreateAccount ? 'Create New Admin' : 'Login'}
        </ButtonIcon>
      </form>
    );
  }
}

export default withRouter(Admin);
