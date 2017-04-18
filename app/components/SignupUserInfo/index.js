/**
*
* SignupUserInfo
*
*/

import React from 'react';
import _ from 'lodash';
// import styled from 'styled-components';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

const style = {
  marginLeft: 5,
};
const imgstyle = {
  width: '30%',
  height: '30%',
};
function SignupUserInfo(props) {
  const { social } = props.user_info;
  const Social = social.map((socialItem) => {
    let item = <p>nothing added</p>;
    if (socialItem) {
      for (const key in socialItem) {
        item = (<ListItem key={key} disabled>
          <TextField hintText={key} value={socialItem[key]} style={style} fullWidth />
        </ListItem>);
      }
      return item;
    }
    return item;
  });

  const UserInfo = [];
  _.forIn(props.user_info, (value, key) => {
    if (key && key !== 'social' && key !== 'profile_img') {
      UserInfo.push(<ListItem key={key} disabled>
        <TextField hintText={key} name={key} value={value} style={style} fullWidth onChange={props.onUserInfoChange} />
      </ListItem>);
    }
  });

  return (
    <div>
      <List>
        <ListItem disabled>
          <Avatar size={30} src={props.user_info.profile_img} style={imgstyle} />
        </ListItem>
        <Subheader><FormattedMessage {...messages.header} /></Subheader>
        <Divider inset />
        {UserInfo}
        {Social}
      </List>
    </div>
  );
}

SignupUserInfo.propTypes = {
  user_info: React.PropTypes.object,
  onUserInfoChange: React.PropTypes.func,
};

export default SignupUserInfo;
