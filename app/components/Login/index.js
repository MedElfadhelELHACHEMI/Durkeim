/**
*
* Login
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';


class Login extends React.Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton
        hoverColor="white"
        {...this.props} children={<Link to="/Auth/Login" activeStyle={{ color: '#297299' }} style={{ textDecoration: 'none', color: '#297299' }} >
          <FormattedMessage {...messages.header} />
        </Link>}
      />
    );
  }
}


Login.propTypes = {

};

export default Login;
