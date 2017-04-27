/**
*
* UserCompanyInfo
*
*/

import React from 'react';
// import styled from 'styled-components';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class UserCompanyInfo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <List>
          <Subheader>Company</Subheader>

        </List>
        <Divider inset />
        <List>
          <Subheader>Experience</Subheader>

        </List>
      </div>
    );
  }
}

UserCompanyInfo.propTypes = {
  Info: React.PropTypes.object,
  isEditing: React.PropTypes.bool,
};

export default UserCompanyInfo;
