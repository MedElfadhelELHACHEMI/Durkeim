/*
 *
 * CreateSignal
 *
 */

import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Chip from 'material-ui/Chip';
import DraftEditor from 'components/DraftEditor';


export class CreateSignal extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.styles = {
      chip: {
        margin: 4,
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    };
  }
  renderChip(value, key) {
    return (
      <Chip
        key={key}
        style={this.styles.chip}
      >
        {value}
      </Chip>
    );
  }

  render() {
    const { onSignalTextChange, onSignalCreationfocus, onSignalCreationblur, onSignalSending } = this.props.SignalActions;
    const { text, isCreating, tags } = this.props.Signal.Signal;
    return (

      <Paper zDepth={isCreating ? 5 : 1} rounded={false} >
        <List>
          <Subheader> {<p>&lt;script&gt;</p>} </Subheader>
          <ListItem disabled>
            <DraftEditor onSignalCreationblur={onSignalCreationblur} onSignalCreationfocus={onSignalCreationfocus} />
          </ListItem>
          {isCreating &&
            <ListItem disabled rightIconButton={<RaisedButton label="Send Signal" primary onTouchTap={onSignalSending} />} />
          }
          {isCreating &&
            <ListItem disabled innerDivStyle={this.styles.wrapper} >
              {tags.map((value, key) => (this.renderChip(value, key)))}
            </ListItem>
          }

        </List>
      </Paper>

    );
  }
}

CreateSignal.propTypes = {
  SignalActions: PropTypes.object.isRequired,
  Signal: PropTypes.object.isRequired,

};


export default CreateSignal;
{ /* <TextField*/ }
{ /* hintText="Write Your First Signal"*/ }
{ /* name="Signal"*/ }
{ /* value={text}*/ }
{ /* multiLine*/ }
{ /* rows={2}*/ }
{ /* fullWidth*/ }
{ /* onFocus={onSignalCreationfocus}*/ }
{ /* onBlur={onSignalCreationblur}*/ }
{ /* onChange={onSignalTextChange}*/ }
{ /* />*/ }
