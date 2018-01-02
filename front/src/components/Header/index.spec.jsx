import React from 'react';
import { shallow } from 'enzyme';

import TaskForm from 'components/TaskForm';
import LoadingIndicator from 'containers/LoadingIndicator';

import Header from './';

jest.mock('components/TaskForm', () => () => (<div />));
jest.mock('components/LoadingIndicator', () => () => (<div />));

describe('#components/Header', () => {
  const addTask = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header addTask={addTask} />);
  });

  it('should contains LoadingIndicator and not contains TaskForm by default', () => {
    expect(wrapper.find(LoadingIndicator)).toHaveLength(1);
    expect(wrapper.find(TaskForm)).toHaveLength(0);
  });

  it('should contains LoadingIndicator and TaskForm if state displayForm field set to true', () => {
    wrapper.setState({
      displayForm: true,
    });
    expect(wrapper.find(LoadingIndicator)).toHaveLength(1);
    expect(wrapper.find(TaskForm)).toHaveLength(1);
    const props = wrapper.find(TaskForm).props();
    expect(props.onCancel).toBe(wrapper.instance().toggleDisplay);
    expect(props.onSubmit).toBe(wrapper.instance().addTask);
  });

  it('should toggle state displayForm field', () => {
    wrapper.setState({
      displayForm: true,
    });
    wrapper.instance().toggleDisplay();
    expect(wrapper.state('displayForm')).toBe(false);
  });

  it('should trigger toggleDisplay and addTask with given task', () => {
    const task = {
      title: 'title',
      description: 'description',
    };
    const spy = jest.spyOn(wrapper.instance(), 'toggleDisplay');

    wrapper.instance().addTask(task);

    expect(spy).toBeCalled();
    expect(addTask).toBeCalledWith(task);
  });
});
