/*
 *
 * SignupForm
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import UserCard from 'components/UserCard';

import { makeSelectSignupForm } from './selectors';
import messages from './messages';
import Wrapper from './Wrapper';
import { changeEmail, Signup, preSignup, changeForm } from './actions';
import SignupUserInfo from 'components/SignupUserInfo';
import SignupInterests from 'components/SignupInterests';
const style = {
  marginLeft: 20,
};

export class SignupForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      user_info: {},
    };
    this.handleUserInfoChange = this.handleUserInfoChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      user_info: nextProps.SignupForm.CompletingInfo.user_info,
    });
  }
  handleUserInfoChange(evt) {
    this.setState({
      user_info: { ...user_info, [evt.target.name]: evt.target.value },
    });
  }

  render() {
    const { Email, isSigningUp, isCompleting, SignUpRequest, CompletingInfo } = this.props.SignupForm;
    const { user_info, general_info, password } = CompletingInfo;
    const { social } = user_info;
    return (
      <Wrapper>
        <Helmet
          title="SignupForm"
          meta={[
            { name: 'description', content: 'Description of SignupForm' },
          ]}
        />
        {!isCompleting ?
          <Paper zDepth={3} rounded={false} >
            <List>
              <Subheader><FormattedMessage {...messages.header} /></Subheader>
              <ListItem disabled>
                <TextField
                  hintText="Email"
                  fullWidth
                  value={Email}
                  onChange={this.props.onChangeEmail}
                />
              </ListItem>
              <ListItem disabled>
                <RaisedButton label="Signup" primary disabled={isSigningUp} onTouchTap={this.props.onpreSignup} />
              </ListItem>
            </List>
          </Paper> :
          <Paper zDepth={3} rounded={false} >
            <List>
              <Subheader>Complete your info</Subheader>
              <ListItem disabled>
                <SignupUserInfo user_info={user_info} onUserInfoChange={this.handleUserInfoChange} />
                <ListItem disabled>
                  <TextField
                    hintText="Password"
                    name="password"
                    fullWidth
                    value={password}
                  />
                </ListItem>
              </ListItem>
              <ListItem disabled>
                <RaisedButton label="Complete Signup" primary disabled={isSigningUp} onTouchTap={this.props.onSignup} />
              </ListItem>
            </List>
          </Paper>}

      </Wrapper>
    );
  }
}

SignupForm.propTypes = {
  SignupForm: PropTypes.object.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onSignup: PropTypes.func.isRequired,
  onpreSignup: PropTypes.func.isRequired,
  onChangeForm: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SignupForm: makeSelectSignupForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: (evt) => dispatch(changeEmail(evt.target.value)),
    onpreSignup: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(preSignup());
    },
    onSignup: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(Signup());
    },
    onChangeForm: (form) => {
      console.log(form);
      dispatch(changeForm(form));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
