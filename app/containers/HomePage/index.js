/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';
import makeSelectApp from 'containers/App/selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { isAuthenticated } from 'utils/setAuthToken';
import { Page, Row, Column } from 'hedron';
import Paper from 'material-ui/Paper';
import HomeFeed from 'components/HomeFeed';
import { defaultAction, SignalActions } from './actions';
import { makeSelectSignal } from './selectors';
import { withAuth } from 'components/Auth';


// function WithAuth(Component, props) {
//   return class extends React.Component {
//     constructor(props) {
//       super(props);
//     }
//     render() {
//       return (
//         <Component App={this.props.App} />
//
//       );
//     }
//   };
// }
class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    App: React.PropTypes.object,
    onSignalCreationfocus: React.PropTypes.func,
    onSignalCreationblur: React.PropTypes.func,
    onSignalTextChange: React.PropTypes.func,
    onSignalTitleChange: React.PropTypes.func,
    onSignalSending: React.PropTypes.func,
    onAddTag: React.PropTypes.func,
    onSettingTags: React.PropTypes.func,
    onGetTags: React.PropTypes.func,
    Signal: React.PropTypes.object,
  };
  componentWillMount() {
    this.props.onGetTags();
  }
  render() {
    // console.log('auth', isAuthenticated());
    const { isLoggedIn } = this.props.App.user;
    const { onSignalTextChange, onSignalTitleChange, onSignalCreationfocus, onSignalCreationblur, onSignalSending, onAddTag, onSettingTags } = this.props;
    return (
      <div>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' },
          ]}
        />
        {isAuthenticated() ?
          <HomeFeed
            SignalActions={{ onSignalTextChange, onSignalTitleChange, onSignalCreationfocus, onSignalCreationblur, onSignalSending, onAddTag, onSettingTags }}
            Signal={this.props.Signal}
          /> :
            <Page>
              <Row >
                <Column sm={6} smShift={3} lg={6} lgShift={3}>
                  <Paper zDepth={1} rounded={false} style={{ width: '100%', height: '100%', textAlign: 'center' }}>
                    <h4> You Are Not Logged In</h4>
                    <p>Please Log in to proceed</p>
                  </Paper>
                </Column>
              </Row>
            </Page>

        }
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    onDefaultAction: () => dispatch(defaultAction()),
    onSignalCreationfocus: () => dispatch(SignalActions.creatingSignalFocus()),
    onSignalCreationblur: () => dispatch(SignalActions.creatingSignalBlur()),
    onSignalSending: () => dispatch(SignalActions.sendingSignal()),
    onSignalTextChange: (editorState) => dispatch(SignalActions.changeSignalText(editorState.getCurrentContent().getPlainText())),
    onSignalTitleChange: (evt) => dispatch(SignalActions.changeSignalTitle(evt.target.value)),
    onAddTag: (tag) => dispatch(SignalActions.addTag(tag)),
    onSettingTags: () => dispatch(SignalActions.settingTags()),
    onGetTags: () => dispatch(SignalActions.getAllTags()),
  };
}
const mapStateToProps = createStructuredSelector({
  App: makeSelectApp(),
  Signal: makeSelectSignal(),

});
// const WithAuthHomepage = withAuth(HomePage);
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
