/**
*
* UserCard
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Column } from 'hedron';
import { ListItem } from 'material-ui/List';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import ImageEdit from 'material-ui/svg-icons/image/edit';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class UserCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const social = this.props.userInfo.social.map((link) => {
      let item = <p>nothing added</p>;
      if (link) {
        for (const key in link) {
          console.log(key);
          item = ((this.props.isEditing ?
            (<TextField
              id={key}
              key={key}
              value={link[key]}
            />) :
              <span key={key} > {link[key]} </span>));
        }
        return item;
      }
      return item;
    });
    return (
      <Column sm={10} lg={9} >
        <Card>
          <CardHeader>
            {this.props.isEditing ?
              (<ListItem disabled >
                <TextField
                  id="first"
                  value={this.props.userInfo.first_name}
                  onChange={this.props.UserCardActions.onEditFirst}
                />
                <TextField
                  id="last"
                  value={this.props.userInfo.last_name}
                  onChange={this.props.UserCardActions.onEditLast}
                />
              </ListItem>) :
              (<ListItem
                primaryText={`${this.props.userInfo.first_name} ${this.props.userInfo.last_name}`}
                rightIcon={<IconButton onTouchTap={this.props.onEdit} tooltip="Edit Profile" tooltipPosition="bottom-left" > <ImageEdit /> </IconButton>}
                disabled
              />)
            }
          </CardHeader>
          <CardText>
            <div>
              {`${this.props.userInfo.occupation} at ${this.props.userInfo.company}`} <br />
              {this.props.isEditing ?
                <TextField
                  multiLine
                  fullWidth
                  hintText="Bio"
                  rows={2}
                  id="bio"
                  value={this.props.userInfo.bio}
                /> :
                this.props.userInfo.bio} <br />
              {this.props.isEditing ?
                <TextField
                  id="email"
                  value={this.props.userInfo.email}
                /> :
                this.props.userInfo.email} <br />
              {social}
            </div>
          </CardText>
        </Card>
      </Column>
    );
  }
}

UserCard.propTypes = {
  userInfo: React.PropTypes.object,
  onEdit: React.PropTypes.func,
  isEditing: React.PropTypes.bool,
  UserCardActions: React.PropTypes.object,
};

export default UserCard;
