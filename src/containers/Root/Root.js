import React from 'react';
import { Provider } from 'react-redux';
import store from '../../config/store';
import App from '../App';

class Root extends React.Component {
	/**
   * Render component.
   *
   * @return Object
   */
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
