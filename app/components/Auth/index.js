/**
*
* Auth
*
*/

import React from 'react';
import makeSelectApp from 'containers/App/selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import styled from 'styled-components';

export function withAuth(wrappedComponent) {
  class Auth extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
      return (
        <div>
          {this.props.App.User.isLoggedIn ?
            <wrappedComponent /> :
            <h1>not authed</h1>}
        </div>
      );
    }
  }
  Auth.propTypes = {
    App: React.PropTypes.object,
  };
  const mapStateToProps = createStructuredSelector({
    App: makeSelectApp(),

  });
  return connect(mapStateToProps)(Auth);
}

