import React from 'react';
import { shallow } from 'enzyme';

import TaskForm from './';

describe('#components/TaskForm', () => {
  const onSubmit = jest.fn();
  const onCancel = jest.fn();
  const task = {
    id: 1,
    title: 'some title',
    description: 'some description',
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskForm onCancel={onCancel} onSubmit={onSubmit} task={task} />);
  });

  it('should have default state with title and description set to blank string', () => {
    wrapper = shallow(<TaskForm onCancel={onCancel} onSubmit={onSubmit} />);
    expect(wrapper.state('title')).toBe('');
    expect(wrapper.state('description')).toBe('');
  });

  it('should set state with title and description from given task', () => {
    expect(wrapper.state('title')).toBe(task.title);
    expect(wrapper.state('description')).toBe(task.description);
  });

  it('should change state title field on onTitleChange', () => {
    const newValue = 'new title';
    wrapper.find('input').simulate('change', { target: { value: newValue } });
    expect(wrapper.state('title')).toBe(newValue);
  });

  it('should change state description field on onDescriptionChange', () => {
    const newValue = 'description';
    wrapper.find('textarea').simulate('change', { target: { value: newValue } });
    expect(wrapper.state('description')).toBe(newValue);
  });

  it('should trigger onCancel prop function with click on cancel button', () => {
    wrapper.find('.btn-cancel').simulate('click');
    expect(onCancel).toBeCalledWith(task.id);
  });

  it('should not trigger onSubmit if state title is not truthy', () => {
    wrapper.setState({
      title: '',
    });
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(onSubmit).not.toBeCalled();
  });

  it('should  trigger onSubmit with new params if state title is truthy', () => {
    wrapper.setState({
      title: 'new title',
      description: 'new description',
    });
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(onSubmit).toBeCalledWith({
      id: task.id,
      title: 'new title',
      description: 'new description',
    });
  });
});
