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
import CircularProgress from 'material-ui/CircularProgress';


import makeSelectProfile from './selectors';
import { editProfile, saveProfile, editProfileUserInfo, editProfileInterests, editProfileGeneralInfo, initProfile } from './actions';
import messages from './messages';

const style = {
  width: '100%',
  height: '100%',
};

export class Profile extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.onInit();
  }
  render() {
    const { isEditing, isLoading, general_info, user_info, interests } = this.props.Profile;
    const { onEdit, onSave } = this.props;
    return (
      <Page style={{ marginTop: '5%' }}>
        <Helmet
          title="Profile"
          meta={[
            { name: 'description', content: 'Description of Profile' },
          ]}
        />
        {isLoading && <Row divisions={11}>
          <Column sm={1} smShift={5} lg={1} lgShift={5} fluid>
            <h5 style={{ color: '#297299' }}>Laoding Profile</h5>
            <CircularProgress size={80} thickness={5} style={{ margin: 0 }} />
          </Column>
        </Row> }
        {!isLoading &&
        <Row alignItems="flex-start">
          <Column sm={2} lg={3} fluid>
            <Avatar
              src={user_info.profile_img}
              size={30}
              style={style}
            />
          </Column>
          <UserCard userInfo={user_info} onEdit={onEdit} isEditing={isEditing} onEditUserInfo={this.props.onEditUserInfo} />
        </Row>}
        {!isLoading &&
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
        </Row>}


      </Page>
    );
  }
}

Profile.propTypes = {
  Profile: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onInit: PropTypes.func.isRequired,
  onEditUserInfo: PropTypes.func.isRequired,
  onEditInterests: PropTypes.func.isRequired,
  onEditGeneralInfo: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Profile: makeSelectProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    onInit: (user) => { dispatch(initProfile(user)); },
    onEdit: () => { dispatch(editProfile()); },
    onSave: () => { dispatch(saveProfile()); },
    onEditUserInfo: (evt) => { dispatch(editProfileUserInfo(evt.target.name, evt.target.value)); },
    onEditInterests: (interests) => { dispatch(editProfileInterests(interests)); },
    onEditGeneralInfo: (generalInfo) => { dispatch(editProfileGeneralInfo(generalInfo)); },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
