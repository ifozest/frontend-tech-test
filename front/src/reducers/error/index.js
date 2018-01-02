import {
  REQUEST,
  TASK_ADD_RESPONSE_FAIL,
  TASKS_RESPONSE_FAIL,
  TASK_UPDATE_RESPONSE_FAIL,
  TASK_DELETE_RESPONSE_FAIL,
} from 'utils/constants';

const error = (state = '', action) => {
  switch (action.type) {
    case TASK_ADD_RESPONSE_FAIL:
    case TASKS_RESPONSE_FAIL:
    case TASK_UPDATE_RESPONSE_FAIL:
    case TASK_DELETE_RESPONSE_FAIL:
      return action.message;
    case REQUEST:
      return '';
    default:
      return state;
  }
};

export default error;
