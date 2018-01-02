import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import TaskBoardComponent from 'components/TaskBoard';
import TaskBoard from './';

jest.mock('components/TaskBoard', () => () => (<div />));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
  tasks: [{
    id: 0,
    title: 'title',
    description: 'description',
  }, {
    id: 1,
    title: 'one title',
    description: 'one description',
  }, {
    id: 2,
    title: 'two title',
    description: 'two description',
  }],
};

describe('#containers/TaskBoard', () => {
  it('should set tasks to Component', () => {
    const store = mockStore(initState);
    const wrapper = mount(<Provider store={store}><TaskBoard /></Provider>);
    expect(wrapper.find(TaskBoardComponent).props().tasks).toEqual(initState.tasks);
  });
});
