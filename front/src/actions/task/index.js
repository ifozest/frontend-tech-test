import {
  TASKS_REQUEST,
  TASKS_RESPONSE_FAIL,
  TASKS_RESPONSE_SUCCESS,
  TASK_ADD_REQUEST,
  TASK_ADD_RESPONSE_FAIL,
  TASK_ADD_RESPONSE_SUCCESS,
  TASK_DELETE_REQUEST,
  TASK_DELETE_RESPONSE_FAIL,
  TASK_DELETE_RESPONSE_SUCCESS,
  TASK_UPDATE_REQUEST,
  TASK_UPDATE_RESPONSE_SUCCESS,
  TASK_UPDATE_RESPONSE_FAIL,
} from 'utils/constants';
import { getTasks, requestAddTask, requestDeleteTask, requestUpdateTask } from 'services/task';

/**
 * Indicates the beginning of fetching tasks
 * @param {number} startAt - position to start fetch at / current number of tasks
 */
export const tasksRequest = startAt => ({
  type: TASKS_REQUEST,
  startAt,
});

/**
 * Indicates the successful response of fetching tasks
 * @param {Object[]} tasks - fetched tasks
 */
export const tasksResponseSuccess = tasks => ({
  type: TASKS_RESPONSE_SUCCESS,
  tasks,
});

/**
 * Indicates the failed response of fetching tasks
 * @param {string} message - error message
 */
export const tasksResponseFail = message => ({
  type: TASKS_RESPONSE_FAIL,
  message,
});

/**
 * Fetch tasks
 * dispatches chain of actions related to fetch tasks logic
 */
export const fetchTasks = () => (dispatch, getStore) => {
  const startAt = getStore().tasks.length;
  dispatch(tasksRequest(startAt));
  return getTasks(startAt)
    .then(({ tasks }) => dispatch(tasksResponseSuccess(tasks)))
    .catch(({ message }) => dispatch(tasksResponseFail(message)));
};

/**
 * Indicates the beginning of adding task
 * @param {Object} task - task to add
 */
export const taskAddRequest = task => ({
  type: TASK_ADD_REQUEST,
  task,
});

/**
 * Indicates the successful response of adding task
 * @param {Object} task - added task
 */
export const taskAddResponseSuccess = task => ({
  type: TASK_ADD_RESPONSE_SUCCESS,
  task,
});

/**
 * Indicates the failed response of adding task
 * @param {string} message - error message
 */
export const taskAddResponseFail = message => ({
  type: TASK_ADD_RESPONSE_FAIL,
  message,
});

/**
 * Add specified task
 * dispatches chain of actions related to add task logic
 * @param {Object} task - task to add
 */
export const addTask = task => (dispatch) => {
  dispatch(taskAddRequest(task));
  return requestAddTask(task)
    .then((response) => {
      dispatch(taskAddResponseSuccess(response.task));
    })
    .catch(({ message }) => dispatch(taskAddResponseFail(message)));
};

/**
 * Indicates the beginning of removing task by given id
 * @param {number} id - id of task to remove
 */
export const taskDeleteRequest = id => ({
  type: TASK_DELETE_REQUEST,
  id,
});

/**
 * Indicates the successful response of removing task
 * @param {number} id - id of removed task
 */
export const taskDeleteResponseSuccess = id => ({
  type: TASK_DELETE_RESPONSE_SUCCESS,
  id,
});

/**
 * Indicates the failed response of removing task
 * @param {string} message - error message
 */
export const taskDeleteResponseFail = message => ({
  type: TASK_DELETE_RESPONSE_FAIL,
  message,
});

/**
 * Delete specified task
 * dispatches chain of actions related to delete task logic
 * @param {number} id - id of task to remove
 */
export const deleteTask = id => (dispatch) => {
  dispatch(taskDeleteRequest(id));
  return requestDeleteTask(id)
    .then(() => {
      dispatch(taskDeleteResponseSuccess(id));
    })
    .catch(({ message }) => dispatch(taskDeleteResponseFail(message)));
};

/**
 * Indicates the beginning of updating task
 * @param {Object} task - new task object
 */
export const taskUpdateRequest = task => ({
  type: TASK_UPDATE_REQUEST,
  task,
});

/**
 * Indicates the successful response of updating task
 * @param {Object} task - new task object
 */
export const taskUpdateResponseSuccess = task => ({
  type: TASK_UPDATE_RESPONSE_SUCCESS,
  task,
});

/**
 * Indicates the failed response of updating task
 * @param {string} message - error message
 */
export const taskUpdateResponseFail = message => ({
  type: TASK_UPDATE_RESPONSE_FAIL,
  message,
});

/**
 * Update specified task
 * dispatches chain of actions related to update task logic
 * @param {Object} task - task to update
 */
export const updateTask = task => (dispatch) => {
  dispatch(taskUpdateRequest(task));
  return requestUpdateTask(task)
    .then(() => {
      dispatch(taskUpdateResponseSuccess(task));
    })
    .catch(({ message }) => dispatch(taskUpdateResponseFail(message)));
};
