import { REQUEST, RESPONSE } from 'utils/constants';

/**
 * Indicates the beginning of AJAX request call
 */
export const requestStart = () => ({
  type: REQUEST,
});

/**
 * Indicates the receiving response of AJAX request call
 */
export const responseReceive = () => ({
  type: RESPONSE,
});
