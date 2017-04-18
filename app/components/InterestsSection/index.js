/**
*
* InterestsSection
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Column } from 'hedron';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';


import { FormattedMessage } from 'react-intl';
import messages from './messages';

function InterestsSection(props) {
  const interests = props.interests.map((interest) => (<ListItem key={interest} disabled primaryText={interest} />))
  return (
    <Column sm={4} lg={3}>
      <Paper zDepth={1} rounded={false} >
        <List>
          <Subheader>Interests</Subheader>
          {interests}
        </List>
      </Paper>
    </Column>
  );
}

InterestsSection.propTypes = {
  interests: React.PropTypes.array,
};

export default InterestsSection;
