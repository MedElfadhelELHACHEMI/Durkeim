/**
*
* DraftEditor
*
*/

// import styled from 'styled-components';
import React, { Component } from 'react';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import createEmojiPlugin from 'draft-js-emoji-plugin'; // eslint-disable-line import/no-unresolved

import { EditorState } from 'draft-js';
import 'draft-js-linkify-plugin/lib/plugin.css'; // eslint-disable-line import/no-unresolved
import 'draft-js-hashtag-plugin/lib/plugin.css'; // eslint-disable-line import/no-unresolved
import 'draft-js-emoji-plugin/lib/plugin.css'; // eslint-disable-line import/no-unresolved


const hashtagPlugin = createHashtagPlugin();
const linkifyPlugin = createLinkifyPlugin();
const emojiPlugin = createEmojiPlugin();
const { EmojiSuggestions } = emojiPlugin;


const plugins = [
  hashtagPlugin,
  linkifyPlugin,
  emojiPlugin,
];
const text = 'In this editor, we can even apply our own styles … #design #theme';
const styles = {
  editor: {
    boxSizing: 'border-box',
    border: '1px solid #ddd',
    cursor: text,
    padding: '16px',
    borderRadius: '2px',
    marginBottom: '2em',
    boxShadow: 'inset 0px 1px 8px -3px #ABABAB',
    background: '#fefefe',
  },

};
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class DraftEditor extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
  focus = () => {
    this.editor.focus();
  };
  render() {
    return (
      <div onClick={this.focus} style={styles.editor}>
        <Editor
          editorState={this.state.editorState}
          onChange={this.onChange}
          plugins={plugins}
          ref={(element) => { this.editor = element; }}
          onFocus={this.props.onSignalCreationfocus}
          onBlur={this.props.onSignalCreationblur}
        />
        <EmojiSuggestions />
      </div>
    );
  }
}

DraftEditor.propTypes = {
  onSignalCreationfocus: React.PropTypes.func,
  onSignalCreationblur: React.PropTypes.func,
};

export default DraftEditor;
