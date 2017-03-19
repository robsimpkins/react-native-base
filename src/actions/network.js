import { CONNECTION_STATUS_SET } from '../config/constants';

export function setConnectionStatus(isConnected) {
  return {
    type: CONNECTION_STATUS_SET,
    isConnected,
  };
}