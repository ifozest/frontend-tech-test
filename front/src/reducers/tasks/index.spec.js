import {
  TASKS_RESPONSE_SUCCESS,
  TASK_ADD_RESPONSE_SUCCESS,
  TASK_UPDATE_RESPONSE_SUCCESS,
  TASK_DELETE_RESPONSE_SUCCESS,
} from 'utils/constants';

import tasks from './';


describe('#reducers/tasks', () => {
  describe('#handle default action', () => {
    it('should return initial state', () => {
      expect(tasks(undefined, {})).toEqual([]);
    });
  });

  describe('#handle TASKS_RESPONSE_SUCCESS action', () => {
    it('should concat old state and new tasks', () => {
      const state = [{
        id: 0,
        title: 'title',
        description: 'description',
      }];
      const newTasks = [{
        id: 1,
        title: 'new title',
        description: 'new description',
      }];
      expect(tasks(state, {
        type: TASKS_RESPONSE_SUCCESS,
        tasks: newTasks,
      })).toEqual([{
        id: 0,
        title: 'title',
        description: 'description',
      }, {
        id: 1,
        title: 'new title',
        description: 'new description',
      }]);
    });
  });

  describe('#handle TASK_DELETE_RESPONSE_SUCCESS action', () => {
    let initState;

    beforeEach(() => {
      initState = [{
        id: 0,
        title: '0',
      }, {
        id: 1,
        title: '1',
      }, {
        id: 2,
        title: '2',
      }];
    });

    it('should remove task from state by id if state has item with given id', () => {
      expect(tasks(initState, {
        type: TASK_DELETE_RESPONSE_SUCCESS,
        id: 1,
      })).toEqual([{
        id: 0,
        title: '0',
      }, {
        id: 2,
        title: '2',
      }]);
    });

    it('should return same state if state has no item with given id', () => {
      expect(tasks(initState, {
        type: TASK_DELETE_RESPONSE_SUCCESS,
        id: 105,
      })).toEqual(initState);
    });
  });

  describe('#handle TASK_ADD_RESPONSE_SUCCESS action', () => {
    it('should add new task to the state', () => {
      const state = [{
        id: 0,
        title: 'title',
        description: 'description',
      }];
      const newTask = {
        id: 1,
        title: 'new title',
        description: 'new description',
      };
      expect(tasks(state, {
        type: TASK_ADD_RESPONSE_SUCCESS,
        task: newTask,
      })).toEqual([{
        id: 1,
        title: 'new title',
        description: 'new description',
      }, {
        id: 0,
        title: 'title',
        description: 'description',
      }]);
    });
  });


  describe('#handle TASK_UPDATE_RESPONSE_SUCCESS action', () => {
    let initState;

    beforeEach(() => {
      initState = [{
        id: 0,
        title: '0',
      }, {
        id: 1,
        title: '1',
      }, {
        id: 2,
        title: '2',
      }];
    });

    it('should update task from state if state has item with given id', () => {
      const newTask = {
        id: 1,
        title: 'new title',
        description: 'new description',
      };

      expect(tasks(initState, {
        type: TASK_UPDATE_RESPONSE_SUCCESS,
        task: newTask,
      })).toEqual([{
        id: 0,
        title: '0',
      }, {
        id: 1,
        title: 'new title',
        description: 'new description',
      }, {
        id: 2,
        title: '2',
      }]);
    });

    it('should return same state if state has no item with given id', () => {
      const newTask = {
        id: 105,
        title: 'new title',
        description: 'new description',
      };

      expect(tasks(initState, {
        type: TASK_UPDATE_RESPONSE_SUCCESS,
        task: newTask,
      })).toEqual(initState);
    });
  });
});
