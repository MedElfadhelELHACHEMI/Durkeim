/**
*
* SignupInterests
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import Chip from 'material-ui/Chip';
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import messages from './messages';


const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};
function SignupInterests(props) {
  const { interests } = props;
  return (
    <div>
      <FormattedMessage {...messages.header} />
      <Divider inset />
      <ListItem disabled innerDivStyle={styles.wrapper} >
        {interests.map((value, key) => ((
          <Chip
            key={key}
            style={styles.chip}
          >
            {value}
          </Chip>
        )))}
      </ListItem>
    </div>
  );
}

SignupInterests.propTypes = {
  interests: React.PropTypes.array,
};

export default SignupInterests;
