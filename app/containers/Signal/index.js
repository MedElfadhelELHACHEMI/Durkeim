/*
 *
 * Signal
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Page, Row, Column } from 'hedron';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import { grey400, darkBlack, lightBlack } from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/Menu';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectSignal from './selectors';
import messages from './messages';

const iconButtonElement = (
  <IconButton
    touch
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);
const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);
export class Signal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="Signal"
          meta={[
            { name: 'description', content: 'Description of Signal' },
          ]}
        />
        <Page style={{ marginTop: 50 }}>
          <Row>
            <Column sm={9} lg={9} fluid >
              <Row>
                <Column sm={12} lg={12}>
                  <Paper zDepth={1} rounded={false} >
                    <List>
                      <Subheader>Active Interactions</Subheader>
                      <ListItem disabled style={{ margin: 0, padding: 0 }} >

                        <MenuItem style={{ margin: 0, padding: 0 }} >
                          <ListItem
                            disabled
                            leftAvatar={<Avatar src="http://lorempixel.com/output/animals-q-c-128-128-4.jpg" />}
                            rightIconButton={rightIconMenu}
                            primaryText="Brendan Lim"
                            secondaryText={
                              <p>
                                <span style={{ color: darkBlack }}>Signal Title</span><br />
                                  I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                                </p>
                              }
                            secondaryTextLines={2}
                          />
                        </MenuItem>
                        <MenuItem disabled>
                          <p>edit</p>
                        </MenuItem>


                      </ListItem>
                      <Divider inset />
                      <ListItem disabled style={{ margin: 0, padding: 0 }} >

                        <MenuItem style={{ margin: 0, padding: 0 }} >
                          <ListItem
                            disabled
                            leftAvatar={<Avatar src="http://lorempixel.com/output/animals-q-c-128-128-4.jpg" />}
                            rightIconButton={rightIconMenu}
                            primaryText="Brendan Lim"
                            secondaryText={
                              <p>
                                <span style={{ color: darkBlack }}>Signal Title</span><br />
                                I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                              </p>
                            }
                            secondaryTextLines={2}
                          />
                        </MenuItem>
                        <MenuItem disabled>
                          <p>edit</p>
                        </MenuItem>


                      </ListItem>
                    </List>
                  </Paper>
                </Column>
              </Row>
              <Row>
                <Column sm={12} lg={12}>
                  <Paper zDepth={1} rounded={false} >
                    <List>
                      <Subheader>Archived</Subheader>
                    </List>
                  </Paper>
                </Column>
              </Row>
            </Column>
            <Column sm={3} lg={3} fluid >
              <Row>
                <Column sm={12} lg={12}>
                  <Paper zDepth={1} rounded={false} >
                    <List>
                      <Subheader>Digest</Subheader>
                    </List>
                  </Paper>
                </Column>
              </Row>


            </Column>
          </Row>

        </Page>
      </div>
    );
  }
}

Signal.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Signal: makeSelectSignal(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signal);
