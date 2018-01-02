import { request } from 'utils/request';

/**
 * Send request to get tasks
 * @param {number} startAt - position to start fetch at
 */
export const getTasks = startAt => request(`/api/tasks?startAt=${startAt}`);

/**
 * Send request to add task
 * @param {Object} task - task to add
 */
export const requestAddTask = task => request('/api/task', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(task),
});

/**
 * Send request to update task
 * @param {task} task - task to update
 */
export const requestUpdateTask = task => request(`/api/task/${task.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(task),
});

/**
 * Send request to delete task
 * @param {number} id - id of task to delete
 */
export const requestDeleteTask = id => request(`/api/task/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
});
