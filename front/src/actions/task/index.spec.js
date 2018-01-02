import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

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
import { getTasks, requestUpdateTask, requestDeleteTask, requestAddTask } from 'services/task';

import {
  tasksRequest,
  tasksResponseSuccess,
  tasksResponseFail,
  fetchTasks,
  taskAddRequest,
  taskAddResponseSuccess,
  taskAddResponseFail,
  addTask,
  taskDeleteRequest,
  taskDeleteResponseSuccess,
  taskDeleteResponseFail,
  deleteTask,
  taskUpdateRequest,
  taskUpdateResponseSuccess,
  taskUpdateResponseFail,
  updateTask,
} from './';

jest.mock('services/task');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('#actions/task', () => {
  describe('#tasksRequest', () => {
    it('should return action with type TASKS_REQUEST and specified startAt param', () => {
      expect(tasksRequest(10)).toEqual({
        type: TASKS_REQUEST,
        startAt: 10,
      });
    });
  });

  describe('#tasksResponseSuccess', () => {
    it('should return action with type TASKS_RESPONSE_SUCCESS and specified tasks param', () => {
      const tasks = [];
      expect(tasksResponseSuccess(tasks)).toEqual({
        type: TASKS_RESPONSE_SUCCESS,
        tasks,
      });
    });
  });

  describe('#tasksResponseFail', () => {
    it('should return action with type TASKS_RESPONSE_FAIL and specified error message', () => {
      const message = 'error message';
      expect(tasksResponseFail(message)).toEqual({
        type: TASKS_RESPONSE_FAIL,
        message,
      });
    });
  });

  describe('#fetchTasks', () => {
    const initialState = {
      tasks: [],
    };
    let store;

    beforeEach(() => {
      store = mockStore(initialState);
    });

    it('should dispatch TASKS_REQUEST and TASKS_RESPONSE_SUCCESS in successful fetch', (done) => {
      getTasks.mockImplementation(() => Promise.resolve({
        tasks: [],
      }));

      store.dispatch(fetchTasks()).then(() => {
        const actions = store.getActions();
        const expectedPayload = [{
          type: TASKS_REQUEST,
          startAt: 0,
        }, {
          type: TASKS_RESPONSE_SUCCESS,
          tasks: [],
        }];
        expect(actions).toEqual(expectedPayload);
        done();
      });
    });

    it('should dispatch TASKS_REQUEST and TASKS_RESPONSE_FAIL in failed fetch', (done) => {
      const message = 'error';
      getTasks.mockImplementation(() => Promise.reject({
        message,
      }));

      store.dispatch(fetchTasks()).then(() => {
        const actions = store.getActions();
        const expectedPayload = [{
          type: TASKS_REQUEST,
          startAt: 0,
        }, {
          type: TASKS_RESPONSE_FAIL,
          message,
        }];
        expect(actions).toEqual(expectedPayload);
        done();
      });
    });
  });

  describe('#taskAddRequest', () => {
    it('should return action with type TASK_ADD_REQUEST and specified task', () => {
      const task = {};
      expect(taskAddRequest(task)).toEqual({
        type: TASK_ADD_REQUEST,
        task,
      });
    });
  });

  describe('#taskAddResponseSuccess', () => {
    it('should return action with type TASK_ADD_RESPONSE_SUCCESS and specified task', () => {
      const task = {};
      expect(taskAddResponseSuccess(task)).toEqual({
        type: TASK_ADD_RESPONSE_SUCCESS,
        task,
      });
    });
  });

  describe('#taskAddResponseFail', () => {
    it('should return action with type TASK_ADD_RESPONSE_FAIL and specified error message', () => {
      const message = 'error message';
      expect(taskAddResponseFail(message)).toEqual({
        type: TASK_ADD_RESPONSE_FAIL,
        message,
      });
    });
  });

  describe('#addTask', () => {
    const initialState = {};
    let store;

    beforeEach(() => {
      store = mockStore(initialState);
    });

    it('should dispatch TASK_ADD_REQUEST and TASK_ADD_RESPONSE_SUCCESS in successful task add', (done) => {
      const task = {
        title: 'title',
      };
      const newTask = {
        id: 1,
        title: 'title',
      };

      requestAddTask.mockImplementation(() => Promise.resolve({
        task: newTask,
      }));

      store.dispatch(addTask(task)).then(() => {
        const actions = store.getActions();
        const expectedPayload = [{
          type: TASK_ADD_REQUEST,
          task,
        }, {
          type: TASK_ADD_RESPONSE_SUCCESS,
          task: newTask,
        }];
        expect(actions).toEqual(expectedPayload);
        done();
      });
    });

    it('should dispatch TASK_ADD_REQUEST and TASK_ADD_RESPONSE_FAIL in failed task add', (done) => {
      const message = 'error';
      const task = {};

      requestAddTask.mockImplementation(() => Promise.reject({
        message,
      }));

      store.dispatch(addTask(task)).then(() => {
        const actions = store.getActions();
        const expectedPayload = [{
          type: TASK_ADD_REQUEST,
          task,
        }, {
          type: TASK_ADD_RESPONSE_FAIL,
          message,
        }];
        expect(actions).toEqual(expectedPayload);
        done();
      });
    });
  });

  describe('#taskDeleteRequest', () => {
    it('should return action with type TASK_DELETE_REQUEST and specified task id', () => {
      const id = 0;
      expect(taskDeleteRequest(id)).toEqual({
        type: TASK_DELETE_REQUEST,
        id,
      });
    });
  });

  describe('#taskDeleteResponseSuccess', () => {
    it('should return action with type TASK_DELETE_RESPONSE_SUCCESS and specified task id', () => {
      const id = 0;
      expect(taskDeleteResponseSuccess(id)).toEqual({
        type: TASK_DELETE_RESPONSE_SUCCESS,
        id,
      });
    });
  });

  describe('#taskDeleteResponseFail', () => {
    it('should return action with type TASK_DELETE_RESPONSE_FAIL and specified error message', () => {
      const message = 'error message';
      expect(taskDeleteResponseFail(message)).toEqual({
        type: TASK_DELETE_RESPONSE_FAIL,
        message,
      });
    });
  });

  describe('#deleteTask', () => {
    const initialState = {};
    let store;

    beforeEach(() => {
      store = mockStore(initialState);
    });

    it('should dispatch TASK_DELETE_REQUEST and TASK_DELETE_RESPONSE_SUCCESS in successful task delete', (done) => {
      const id = 0;

      requestDeleteTask.mockImplementation(() => Promise.resolve({
        id,
      }));

      store.dispatch(deleteTask(id)).then(() => {
        const actions = store.getActions();
        const expectedPayload = [{
          type: TASK_DELETE_REQUEST,
          id,
        }, {
          type: TASK_DELETE_RESPONSE_SUCCESS,
          id,
        }];
        expect(actions).toEqual(expectedPayload);
        done();
      });
    });

    it('should dispatch TASK_DELETE_REQUEST and TASK_DELETE_RESPONSE_FAIL in failed task delete', (done) => {
      const message = 'error';
      const id = 0;

      requestDeleteTask.mockImplementation(() => Promise.reject({
        message,
      }));

      store.dispatch(deleteTask(id)).then(() => {
        const actions = store.getActions();
        const expectedPayload = [{
          type: TASK_DELETE_REQUEST,
          id,
        }, {
          type: TASK_DELETE_RESPONSE_FAIL,
          message,
        }];
        expect(actions).toEqual(expectedPayload);
        done();
      });
    });
  });


  describe('#taskUpdateRequest', () => {
    it('should return action with type TASK_UPDATE_REQUEST and specified task', () => {
      const task = {};
      expect(taskUpdateRequest(task)).toEqual({
        type: TASK_UPDATE_REQUEST,
        task,
      });
    });
  });

  describe('#taskUpdateResponseSuccess', () => {
    it('should return action with type TASK_UPDATE_RESPONSE_SUCCESS and specified task', () => {
      const task = {};
      expect(taskUpdateResponseSuccess(task)).toEqual({
        type: TASK_UPDATE_RESPONSE_SUCCESS,
        task,
      });
    });
  });

  describe('#taskUpdateResponseFail', () => {
    it('should return action with type TASK_UPDATE_RESPONSE_FAIL and specified error message', () => {
      const message = 'error message';
      expect(taskUpdateResponseFail(message)).toEqual({
        type: TASK_UPDATE_RESPONSE_FAIL,
        message,
      });
    });
  });

  describe('#updateTask', () => {
    const initialState = {};
    let store;

    beforeEach(() => {
      store = mockStore(initialState);
    });

    it('should dispatch TASK_UPDATE_REQUEST and TASK_UPDATE_RESPONSE_SUCCESS in successful task update', (done) => {
      const task = {};

      requestUpdateTask.mockImplementation(() => Promise.resolve({
        task,
      }));

      store.dispatch(updateTask(task)).then(() => {
        const actions = store.getActions();
        const expectedPayload = [{
          type: TASK_UPDATE_REQUEST,
          task,
        }, {
          type: TASK_UPDATE_RESPONSE_SUCCESS,
          task,
        }];
        expect(actions).toEqual(expectedPayload);
        done();
      });
    });

    it('should dispatch TASK_UPDATE_REQUEST and TASK_UPDATE_RESPONSE_FAIL in failed task update', (done) => {
      const message = 'error';
      const task = {};

      requestUpdateTask.mockImplementation(() => Promise.reject({
        message,
      }));

      store.dispatch(updateTask(task)).then(() => {
        const actions = store.getActions();
        const expectedPayload = [{
          type: TASK_UPDATE_REQUEST,
          task,
        }, {
          type: TASK_UPDATE_RESPONSE_FAIL,
          message,
        }];
        expect(actions).toEqual(expectedPayload);
        done();
      });
    });
  });
});
