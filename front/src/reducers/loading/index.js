import {
  REQUEST,
  RESPONSE,
} from 'utils/constants';

/**
 * Loading flag
 * Indicate status of AJAX request
 *
 * @param {boolean} [state = false] - current state
 * @param {Object} action
 * @param {string} action.type - action type
 * @return {boolean} new state
 */
const loading = (state = false, action) => {
  switch (action.type) {
    case REQUEST:
      return true;
    case RESPONSE:
      return false;
    default:
      return state;
  }
};

export default loading;
