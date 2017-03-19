import createReducer from 'redux-createreducer';
import { CONNECTION_STATUS_SET } from '../config/constants';

export const network = createReducer({}, {
  CONNECTION_STATUS_SET: (state, action) => {
    return {
      ...state,
      isConnected: action.isConnected,
    };
  }
});
