import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { addTask } from 'actions/task';
import HeaderComponent from 'components/Header';
import Header from './';

jest.mock('actions/task');
jest.mock('components/Header', () => () => (<div />));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('#containers/Header', () => {
  const store = mockStore({});
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Provider store={store}><Header /></Provider>);
  });

  it('should trigger deleteTask action', () => {
    addTask.mockImplementation(() => ({
      type: 'MOCK_TYPE',
    }));
    const task = {
      id: 1,
      title: 'title',
      description: 'description',
    };
    wrapper.find(HeaderComponent).props().addTask(task);
    expect(addTask).toBeCalledWith(task);
  });
});
