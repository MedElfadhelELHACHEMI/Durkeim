/**
*
* ApplicationBar
*
*/

import React from 'react';
// import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Logged from '../Logged';
import Login from '../Login';
import Signup from '../Signup';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import makeSelectUser from 'containers/User/selectors';

const style = {
  backgroundColor: 'white',
};
class ApplicationBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AppBar
          style={style}
          title={<Link to="/" activeStyle={{ color: '#297299' }} style={{ textDecoration: 'none', color: '#297299' }}> <FormattedMessage {...messages.header} /></Link>}
          iconElementLeft={<IconButton style={{ padding: 0, marginLeft: 50 }}>
            <Avatar
              backgroundColor="transparent"
              src="https://cdn.rawgit.com/MedElfadhelELHACHEMI/CDN/3f809b78/color_logo_transparent_background_small.png"
              size={45}
            />
          </IconButton>}
          iconElementRight={this.props.User.isLoggedIn ? <Logged userInfo={this.props.User.user_info} /> : <div> <Signup /><Login /> </div>}
        />

      </div>
    );
  }
}

ApplicationBar.propTypes = {
  User: React.PropTypes.object,
  dispatch: React.PropTypes.func,
};

export default ApplicationBar;
