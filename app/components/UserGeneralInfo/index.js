/**
 *
 * UserInfo
 *
 */

import React from 'react';
import _ from 'lodash';
import { Column } from 'hedron';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Avatar from 'material-ui/Avatar';


import { FormattedMessage } from 'react-intl';
import messages from './messages';

class UserGeneralInfo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const Education = this.props.Info.education.map((education) => {
      let item = <p>nothing added</p>;
      if (education) {
        for (const key in education) {
          item = (this.props.isEditing ?
              (<ListItem disabled key={key} >
                <TextField
                  hintText={key}
                  value={key}
                />
                <TextField
                  hintText={education[key]}
                />
              </ListItem>) :
              <ListItem leftAvatar={<Avatar src="https://cdn.rawgit.com/MedElfadhelELHACHEMI/CDN/3f809b78/color_logo_transparent_background_small.png" size={35} />} key={key} disabled primaryText={education[key]} secondaryText={key} />
          );
        }
        return item;
      }
      return item;
    });
    const Experience = this.props.Info.experience.map((experience) => {
      let item = '';
      if (experience) {
        for (const key in experience) {
          item = (this.props.isEditing ?
              (<ListItem disabled key={key} >
                <TextField
                  hintText={key}
                />
                <TextField
                  hintText={experience[key]}
                />
              </ListItem>) :
              <ListItem leftAvatar={<Avatar src="https://cdn.rawgit.com/MedElfadhelELHACHEMI/CDN/3f809b78/color_logo_transparent_background_small.png" size={35} />} key={key} disabled primaryText={experience[key]} secondaryText={key} />
          );
        }
        return item;
      }
      return item;
    });
    return (
      <div>
        <List>
          <Subheader>Education</Subheader>
          {Education}
        </List>
        <Divider inset />
        <List>
          <Subheader>Experience</Subheader>
          {Experience}
        </List>
      </div>

    );
  }
}

UserGeneralInfo.propTypes = {
  Info: React.PropTypes.object,
  isEditing: React.PropTypes.bool,
};

export default UserGeneralInfo;
