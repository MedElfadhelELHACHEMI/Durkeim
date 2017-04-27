/**
*
* TagBox
*
*/

import React from 'react';
// import styled from 'styled-components';
import AutoComplete from 'material-ui/AutoComplete';


import { FormattedMessage } from 'react-intl';
import messages from './messages';


const dataSourceConfig = {
  text: 'value',
  value: '_id',
};
class TagBox extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    searchText: '',
  };

  handleUpdateInput = (searchText) => {
    this.setState({
      searchText,
    });
  };

  handleNewRequest = (chosenRequest, index) => {
    this.setState({
      searchText: '',
    });
    if (index !== -1) {
      this.props.onAddTag(chosenRequest);
    } else {
      console.log(chosenRequest);
      const newTag = {
        _id: index,
        value: chosenRequest,
        type: null,
      };
      this.props.onAddTag(newTag);
    }
  };

  render() {
    return (
      <div>
        <AutoComplete
          hintText="Add Additional tags "
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleNewRequest}
          dataSource={this.props.tags}
          filter={(searchText, key) => (key.indexOf(searchText) !== -1)}
          dataSourceConfig={dataSourceConfig}
          openOnFocus
          fullWidth
        />
      </div>
    );
  }
}

TagBox.propTypes = {
  tags: React.PropTypes.array,
  onAddTag: React.PropTypes.func,
};

export default TagBox;
