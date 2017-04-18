/*
 *
 * LoginForm
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import makeSelectLoginForm from './selectors';
import messages from './messages';
import Wrapper from './Wrapper';
import { Login, changeEmail, changePassword } from './actions';

export class LoginForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { Email, password, isLoggingin } = this.props.LoginForm;
    return (
      <Wrapper>
        <Helmet
          title="LoginForm"
          meta={[
            { name: 'description', content: 'Description of LoginForm' },
          ]}
        />
        <Paper zDepth={3} rounded={false} className="mainList" >
          <List>
            <Subheader><FormattedMessage {...messages.header} /></Subheader>
            <ListItem disabled>
              <TextField
                hintText="Email"
                name="Email"
                value={Email}
                fullWidth
                onChange={this.props.onChangeEmail}
              />
            </ListItem>
            <ListItem disabled>
              <TextField
                hintText="Password"
                fullWidth
                name="password"
                value={password}
                onChange={this.props.onChangePassword}
              />
            </ListItem>
            <ListItem disabled>
              <RaisedButton label="Login" disabled={isLoggingin} primary onTouchTap={this.props.onLogin} />
            </ListItem>
          </List>
        </Paper>
      </Wrapper>
    );
  }
}

LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  LoginForm: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  LoginForm: makeSelectLoginForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: (evt) => dispatch(changeEmail(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    onLogin: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(Login());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
