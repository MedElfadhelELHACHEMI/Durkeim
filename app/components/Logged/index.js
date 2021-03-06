/**
*
* Logged
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import { Link } from 'react-router';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import { red500 } from 'material-ui/styles/colors';
import messages from './messages';

const style = { marginRight: 100, cursor: 'pointer' };
function Logged(props) {
  return (
    <div>
      <Link to="/Signals" activeStyle={{ color: 'white' }} style={{ textDecoration: 'none', color: '#297299', marginRight: 50 }}>Interactions</Link>
      <IconMenu
        animated
        iconButtonElement={
          <IconButton style={{ padding: 0, marginTop: 0 }}>
            <Badge
              badgeContent={6}
              secondary
              badgeStyle={{ top: 34, left: 5, color: 'white', backgroundColor: red500 }}
            >
              <NotificationsIcon style={{ color: '#297299', paddingTop: 0 }} />
            </Badge>
          </IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem primaryText="Notification 1" />

        <MenuItem primaryText="Notification 2" />
      </IconMenu>

      <IconMenu

        iconButtonElement={
          <IconButton style={style}>
            <Avatar
              src={props.userInfo.profile_img}
              size={35}
            />
          </IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuItem
          primaryText={<Link to="/u/profile" style={{ textDecoration: 'none' }}>
            Profile
          </Link>}
        />

        <MenuItem primaryText="Sign out" />
      </IconMenu>
    </div>

  );
}
Logged.muiName = 'IconMenu';


Logged.propTypes = {
  userInfo: React.PropTypes.object,
};

export default Logged;
