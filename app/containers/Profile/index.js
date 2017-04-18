/*
 *
 * Profile
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { Page, Row, Column } from 'hedron';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton';
import ContentSave from 'material-ui/svg-icons/content/save';
import InterestsSection from 'components/InterestsSection';
import UserInfo from 'components/UserInfo';
import UserCard from 'components/UserCard';
import makeSelectApp from 'containers/App/selectors';


import makeSelectProfile from './selectors';
import { editProfile, saveProfile, editProfileFirst, editProfileLast, initProfile } from './actions';
import messages from './messages';

const style = {
  width: '100%',
  height: '100%',
};

export class Profile extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    console.log('appuser', this.props.App.user);
    this.props.onInit(this.props.App.user);
  }
  render() {
    console.log('profileuser', this.props.Profile);
    const { isEditing, general_info, user_info, interests } = this.props.Profile;
    const { onEdit, onSave, onEditFirst, onEditLast } = this.props;
    const UserCardActions = { onEditFirst, onEditLast };
    return (
      <Page style={{ marginTop: '5%' }}>
        <Helmet
          title="Profile"
          meta={[
            { name: 'description', content: 'Description of Profile' },
          ]}
        />
        <Row alignItems="flex-start">
          <Column sm={2} lg={3} fluid>
            <Avatar
              src={user_info.profile_img}
              size={30}
              style={style}
            />
          </Column>
          <UserCard userInfo={user_info} onEdit={onEdit} isEditing={isEditing} UserCardActions={UserCardActions} />
        </Row>
        <Row justifyContent="center">
          <InterestsSection interests={interests} />
          <UserInfo Info={general_info} isEditing={isEditing} />
          {isEditing ?
            <RaisedButton
              label="Save"
              labelPosition="before"
              primary
              icon={<ContentSave />}
              onTouchTap={onSave}
            /> :
              <div />}
        </Row>

      </Page>
    );
  }
}

Profile.propTypes = {
  Profile: PropTypes.object.isRequired,
  App: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onEditFirst: PropTypes.func.isRequired,
  onEditLast: PropTypes.func.isRequired,
  onInit: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Profile: makeSelectProfile(),
  App: makeSelectApp(),
});

function mapDispatchToProps(dispatch) {
  return {
    onInit: (user) => { dispatch(initProfile(user)); },
    onEdit: () => { dispatch(editProfile()); },
    onSave: () => { dispatch(saveProfile()); },
    onEditFirst: (evt) => { dispatch(editProfileFirst(evt.target.value)); },
    onEditLast: (evt) => { dispatch(editProfileLast(evt.target.value)); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
