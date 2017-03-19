import React from 'react';
import { NetInfo } from 'react-native';
import {
  Actions,
  Router,
  Scene,
} from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actionCreators from '../../actions';

class App extends React.Component {
  /**
   * Invoked immediately after component is mounted.
   *
   * @return void
   */
  componentDidMount() {
    // Register event listener for changes to internet connectivity
    NetInfo.isConnected.addEventListener('change', this.setConnectionStatus.bind(this));
  }

  /**
   * Invoked immediately before component is unmounted.
   *
   * @return void
   */
  componentWillUnmount() {
    // Remove event listener for changes to internet connectivity
    NetInfo.isConnected.removeEventListener('change', this.setConnectionStatus.bind(this));
  }

  /**
   * Render component.
   *
   * @return Object
   */
  render() {
    return (
      <Router {...this.props}>
        <Scene key="root">
          {/* Define router scenes */}
        </Scene>
      </Router>
    );
  }

  /**
   * Network information change event handler.
   * Dispatch Redux action to set internet connection status.
   *
   * @param  Boolean  isConnected
   * @return void
   */
  setConnectionStatus(isConnected) {
    this.props.setConnectionStatus(isConnected);
  }
}

/**
 * Subscribe component to Redux store updates.
 * The object returned will merge the specified Redux state properties into the components props.
 *
 * @param  Object  state
 * @return Object
 */
function mapStateToProps(state) {
  return {};
}

/**
 * Subscribe component to Redux action creators.
 * The object returned will merge the Redux action creators into the components props.
 *
 * @param  Function  dispatch
 * @return Object
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// Connect the App component to the Redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);
