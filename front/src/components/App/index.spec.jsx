import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from 'containers/Header';
import TaskBoard from 'containers/TaskBoard';
import TaskBoardFooter from 'containers/TaskBoardFooter';
import Error from 'containers/Error';

import App from './';

jest.mock('containers/Header', () => () => (<div />));
jest.mock('containers/TaskBoard', () => () => (<div />));
jest.mock('containers/TaskBoardFooter', () => () => (<div />));
jest.mock('containers/Error', () => () => (<div />));

const fetchTasks = jest.fn();

describe('#components/App', () => {
  it('should have listed components', () => {
    const wrapper = shallow(<App fetchTasks={fetchTasks} />);
    expect(wrapper.find(Header)).toHaveLength(1);
    expect(wrapper.find(Error)).toHaveLength(1);
    expect(wrapper.find(TaskBoard)).toHaveLength(1);
    expect(wrapper.find(TaskBoardFooter)).toHaveLength(1);
  });

  it('should trigger fetchTasks after mounting', () => {
    mount(<App fetchTasks={fetchTasks} />);
    expect(fetchTasks).toBeCalled();
  });
});

