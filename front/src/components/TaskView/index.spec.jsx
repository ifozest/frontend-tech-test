import React from 'react';
import { shallow } from 'enzyme';

import TaskView from './';

describe('#components/TaskView', () => {
  const onEdit = jest.fn();
  const onRemove = jest.fn();
  const task = {
    id: 1,
    title: 'some title',
    description: 'some description',
  };
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskView onEdit={onEdit} onRemove={onRemove} task={task} />);
  });

  it('should display title and description', () => {
    expect(wrapper.find('.task-view_title').text()).toBe(task.title);
    expect(wrapper.find('.task-view_description').text()).toBe(task.description);
  });

  it('should trigger onEdit', () => {
    wrapper.find('.task-view_actions_edit').simulate('click');
    expect(onEdit).toBeCalledWith(task.id);
  });

  it('should trigger onRemove', () => {
    wrapper.find('.task-view_actions_remove').simulate('click');
    expect(onRemove).toBeCalledWith(task.id);
  });

  it('should display no info message if description not defined', () => {
    wrapper.setProps({
      task: {
        id: 1,
        title: 'new title',
      },
    });
    expect(wrapper.find('.task-view_description').text()).toBe('No info');
  });
});
