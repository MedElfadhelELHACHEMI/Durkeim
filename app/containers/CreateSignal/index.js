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
import TagBox from 'components/TagBox';
import Transition from 'react-motion-ui-pack';
import { spring } from 'react-motion';


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
        {value.value}
      </Chip>
    );
  }

  render() {
    const { onSignalTextChange, onSignalTitleChange, onSignalCreationfocus, onSignalCreationblur, onSignalSending, onAddTag, onSettingTags } = this.props.SignalActions;
    const { generalTags } = this.props.Signal;
    const { title, text, isCreating, tags, isSettingTags } = this.props.Signal.Signal;
    return (

      <Paper zDepth={isCreating ? 5 : 1} rounded={false} >
        <List>
          <Subheader> {<p>&lt;script&gt;</p>} </Subheader>
          {!isSettingTags ?
            <ListItem disabled>
              <TextField hintText="Give your signal a title" fullWidth onChange={onSignalTitleChange} value={title} />
              <DraftEditor signalText={text} onSignalCreationblur={onSignalCreationblur} onSignalCreationfocus={onSignalCreationfocus} onSignalTextChange={onSignalTextChange} />
            </ListItem> :
            <ListItem disabled >
              <TagBox tags={generalTags} onAddTag={onAddTag} />
            </ListItem>
          }
          {!isSettingTags ?
            <ListItem disabled rightIconButton={<RaisedButton label="Proceed" primary onTouchTap={onSettingTags} />} /> :
            <ListItem disabled rightIconButton={<RaisedButton label="Send Signal" primary onTouchTap={onSignalSending} />} />

          }
          <ListItem disabled innerDivStyle={this.styles.wrapper} >
            {tags.map((value, key) => (this.renderChip(value, key)))}
          </ListItem>
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
