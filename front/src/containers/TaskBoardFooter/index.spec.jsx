import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { fetchTasks } from 'actions/task';
import TaskBoardFooterComponent from 'components/TaskBoardFooter';
import TaskBoardFooter from './';

jest.mock('actions/task');
jest.mock('components/TaskBoardFooter', () => () => (<div />));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('#containers/TaskBoardFooter', () => {
  it('should trigger fetchTask action', () => {
    fetchTasks.mockImplementation(() => ({
      type: 'MOCK_TYPE',
    }));
    const store = mockStore({});
    const wrapper = mount(<Provider store={store}><TaskBoardFooter /></Provider>);
    wrapper.find(TaskBoardFooterComponent).props().loadMore();
    expect(fetchTasks).toBeCalled();
  });
});
