/**
*
* HomeFeed
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Page, Row, Column } from 'hedron';
import { CreateSignal } from 'containers/CreateSignal';

import { FormattedMessage } from 'react-intl';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import { List } from 'material-ui/List';

import messages from './messages';
import CreateSignalWrapper from './CreateSignalWrapper';
import NewsFeedWrapper from './NewsFeedWrapper';
import InteractionsWrapper from './InteractionsWrapper';
import DigestWrapper from './DigestWrapper';

class HomeFeed extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Page >
        <Row>
          <Column sm={8} lg={8} >
            <CreateSignalWrapper>
              <CreateSignal SignalActions={this.props.SignalActions} Signal={this.props.Signal} />
            </CreateSignalWrapper>
          </Column>
          <Column sm={4} lg={4} >
            <DigestWrapper>
              <Paper zDepth={1} rounded={false} >
                <List>
                  <Subheader>Digest</Subheader>
                </List>
              </Paper>
            </DigestWrapper>
          </Column>
        </Row>
        <Row>
          <Column sm={8} lg={8} >
            <NewsFeedWrapper>
              <Paper zDepth={1} rounded={false} >
                <List>
                  <Subheader>NewsFeed</Subheader>
                </List>
              </Paper>
            </NewsFeedWrapper>
          </Column>
          <Column sm={4} lg={4} >
            <InteractionsWrapper>
              <Paper zDepth={1} rounded={false} >
                <List>
                  <Subheader>Interaction</Subheader>
                </List>
              </Paper>
            </InteractionsWrapper>
          </Column>
        </Row>
      </Page>


    );
  }
}

HomeFeed.propTypes = {
  dispatch: React.PropTypes.func,
  SignalActions: React.PropTypes.object,
  Signal: React.PropTypes.object,
};

export default HomeFeed;