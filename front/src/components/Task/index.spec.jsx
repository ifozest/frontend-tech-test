import React from 'react';
import { shallow } from 'enzyme';

import TaskForm from 'components/TaskForm';
import TaskView from 'components/TaskView';

import Task from './';

jest.mock('components/TaskForm', () => () => (<div />));
jest.mock('components/TaskView', () => () => (<div />));

describe('#components/Task', () => {
  const task = {
    id: 0,
    title: 'title',
    description: 'description',
  };
  const deleteTask = jest.fn();
  const updateTask = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Task
        deleteTask={deleteTask}
        task={task}
        updateTask={updateTask}
      />);
  });

  it('should have default state of editMode false and display TaskView component', () => {
    expect(wrapper.state('editMode')).toBe(false);
    expect(wrapper.find(TaskView)).toHaveLength(1);
    const props = wrapper.find(TaskView).props();
    expect(props.task).toEqual(task);
    expect(props.onEdit).toBe(wrapper.instance().toggleEditMode);
    expect(props.onRemove).toBe(wrapper.instance().deleteTask);
  });

  it('should show TaskForm component if editMode set to true', () => {
    wrapper.setState({
      editMode: true,
    });
    expect(wrapper.find(TaskForm)).toHaveLength(1);
    const props = wrapper.find(TaskForm).props();
    expect(props.task).toEqual(task);
    expect(props.onCancel).toBe(wrapper.instance().toggleEditMode);
    expect(props.onSubmit).toBe(wrapper.instance().updateTask);
  });

  it('should toggle state editMode flag', () => {
    wrapper.setState({
      editMode: true,
    });
    wrapper.instance().toggleEditMode();
    expect(wrapper.state('editMode')).toBe(false);
  });

  it('should trigger props.deleteTask on deleteTask with given id', () => {
    const id = 10;
    wrapper.instance().deleteTask(id);
    expect(wrapper.instance().props.deleteTask).toBeCalledWith(id);
  });

  it('should trigger toggleEditMode and props.updateTask on updateTask with given task', () => {
    const newTask = {
      id: 1,
      title: 'some title',
      description: 'some description',
    };
    const spy = jest.spyOn(wrapper.instance(), 'toggleEditMode');
    wrapper.instance().updateTask(newTask);
    expect(spy).toBeCalled();
    expect(wrapper.instance().props.updateTask).toBeCalledWith(newTask);
  });
});
