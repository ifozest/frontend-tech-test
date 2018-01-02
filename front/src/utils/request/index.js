import 'whatwg-fetch';

import store from 'store';
import { requestStart, responseReceive } from 'actions/request';

/**
 * Check ajax response status
 * @param response
 * @return {*}
 */
export const checkStatus = (response) => {
  store.dispatch(responseReceive());
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

/**
 * Parse response body
 * @param response
 */
export const parseJSON = (response) => {
  if (response.status === 204) {
    return response.text();
  }
  return response.json();
};

/**
 * Fetch wrapper
 * @param args
 */
export const request = (...args) => {
  store.dispatch(requestStart());
  return fetch(...args)
    .then(checkStatus)
    .then(parseJSON);
};
