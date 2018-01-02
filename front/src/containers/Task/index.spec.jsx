import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { deleteTask, updateTask } from 'actions/task';
import TaskComponent from 'components/Task';
import Task from './';

jest.mock('actions/task');
jest.mock('components/Task', () => () => (<div />));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('#containers/TaskBoardFooter', () => {
  const store = mockStore({});
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Provider store={store}><Task /></Provider>);
  });

  it('should trigger deleteTask action', () => {
    deleteTask.mockImplementation(() => ({
      type: 'MOCK_TYPE',
    }));
    const id = 10;
    wrapper.find(TaskComponent).props().deleteTask(id);
    expect(deleteTask).toBeCalledWith(id);
  });

  it('should trigger updateTask action', () => {
    updateTask.mockImplementation(() => ({
      type: 'MOCK_TYPE',
    }));
    const task = {
      id: 1,
      title: 'title',
      description: 'description',
    };
    wrapper.find(TaskComponent).props().updateTask(task);
    expect(updateTask).toBeCalledWith(task);
  });
});
