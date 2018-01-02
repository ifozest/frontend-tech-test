import {
  TASKS_RESPONSE_SUCCESS,
  TASK_ADD_RESPONSE_SUCCESS,
  TASK_UPDATE_RESPONSE_SUCCESS,
  TASK_DELETE_RESPONSE_SUCCESS,
} from 'utils/constants';

/**
 * Array of tasks
 * @param {Object[]} [state = []] - current state
 * @param {Object} action
 * @param {string} action.type - action type
 * @return {Object[]} new state
 */
const tasks = (state = [], action) => {
  switch (action.type) {
    case TASKS_RESPONSE_SUCCESS:
      return [
        ...state,
        ...action.tasks,
      ];
    case TASK_DELETE_RESPONSE_SUCCESS: {
      const newState = Array.from(state);
      const index = state.findIndex(({ id }) => id === action.id);
      if (index > -1) {
        newState.splice(index, 1);
      }
      return newState;
    }
    case TASK_ADD_RESPONSE_SUCCESS:
      return [action.task, ...state];
    case TASK_UPDATE_RESPONSE_SUCCESS: {
      const { task } = action;
      const newState = Array.from(state);
      const index = state.findIndex(({ id }) => id === task.id);
      if (index > -1) {
        newState.splice(index, 1, Object.assign({}, task));
      }
      return newState;
    }
    default:
      return state;
  }
};

export default tasks;
