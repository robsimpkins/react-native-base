import { combineReducers } from 'redux';
import * as networkReducers from './network';

export default combineReducers({
  ...networkReducers,
});
