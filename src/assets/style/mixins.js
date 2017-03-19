import { Dimensions } from 'react-native';
import variables from './variables';

// Prepare window height and width
const { height, width } = Dimensions.get('window');

/**
 * Calculate pixel value as multiple of viewport height.
 *
 * @param  Integer  value
 * @return Integer
 */
export function vh(value) {
  return value * height / 100;
}

/**
 * Calculate pixel value as multiple of viewport width.
 *
 * @param  Integer  value
 * @return Integer
 */
export function vw(value) {
  return value * width / 100;
}
