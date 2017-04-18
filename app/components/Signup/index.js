/**
*
* Signup
*
*/

import React from 'react';
// import styled from 'styled-components';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Signup extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static muiName = 'FlatButton';
  render() {
    return (
      <FlatButton
        hoverColor="white"
        {...this.props} children={<Link to="/Auth/Signup" activeStyle={{ color: '#297299' }} style={{ textDecoration: 'none', color: '#297299' }}>
          <FormattedMessage {...messages.header} />
        </Link>}
      />
    );
  }
}

Signup.propTypes = {

};

export default Signup;
