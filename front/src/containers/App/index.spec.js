import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { fetchTasks } from 'actions/task';
import AppComponent from 'components/App';
import App from './';

jest.mock('actions/task');
jest.mock('components/App', () => () => (<div />));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('#containers/App', () => {
  const store = mockStore({});
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Provider store={store}><App /></Provider>);
  });

  it('should trigger deleteTask action', () => {
    fetchTasks.mockImplementation(() => ({
      type: 'MOCK_TYPE',
    }));
    wrapper.find(AppComponent).props().fetchTasks();
    expect(fetchTasks).toBeCalled();
  });
});
