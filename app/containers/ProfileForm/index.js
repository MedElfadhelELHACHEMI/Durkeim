/*
 *
 * ProfileForm
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { LocalForm, Control } from 'react-redux-form';
import makeSelectProfileForm from './selectors';
import messages from './messages';

export class ProfileForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = this.props.ProfileForm;
  }
  handleChange(values) { console.log(values); }
  handleUpdate(form) { console.log(form); }
  handleSubmit(values) { console.log(values); }
  render() {
    return (
      <div>
        <Helmet
          title="ProfileForm"
          meta={[
            { name: 'description', content: 'Description of ProfileForm' },
          ]}
        />
        <FormattedMessage {...messages.header} />
        <LocalForm
          onUpdate={(form) => this.handleUpdate(form)}
          onChange={(values) => this.handleChange(values)}
          onSubmit={(values) => this.handleSubmit(values)}
        >
          <Control.text model="user_info.first_name" />
          <Control.text model=".password" />
          <button type="submit">
            Finish registration!
          </button>
        </LocalForm>
      </div>
    );
  }
}

ProfileForm.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ProfileForm : PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ProfileForm: makeSelectProfileForm(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileForm);
