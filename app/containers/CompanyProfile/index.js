/*
 *
 * CompanyProfile
 *
 */


import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { Page, Row, Column } from 'hedron';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Chart from 'components/Chart';

import { createStructuredSelector } from 'reselect';
import makeSelectCompanyProfile from './selectors';

import messages from './messages';

const styles = {
  img: {
    width: '60%',
    height: 'auto',
  },
};

export class CompanyProfile extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Page style={{ marginTop: '5%' }} >
        <Helmet
          title="CompanyProfile"
          meta={[
            { name: 'description', content: 'Description of CompanyProfile' },
          ]}
        />
        <Row alignItems="flex-start">
          <Column sm={2} lg={3} fluid>
            <Avatar style={styles.img} src="https://cdn.rawgit.com/MedElfadhelELHACHEMI/CDN/3f809b78/color_logo_transparent_background_small.png" size={30} />
          </Column>
          <Column sm={10} lg={9} fluid>
            <Paper zDepth={1} rounded={false} >
              <List>
                <Subheader>Profile</Subheader>
              </List>
            </Paper >

            <Paper zDepth={1} rounded={false}>
              <List>
                <Subheader>Metrics</Subheader>
                <Chart />
              </List>
            </Paper>
          </Column>

        </Row>
      </Page>
    );
  }
}

CompanyProfile.propTypes = {
  dispatch: PropTypes.func.isRequired,
  companyProfile: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  companyProfile: makeSelectCompanyProfile(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyProfile);
