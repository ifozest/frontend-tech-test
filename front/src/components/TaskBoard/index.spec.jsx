import React from 'react';
import { shallow } from 'enzyme';
import Task from 'containers/Task';
import TaskBoardEmpty from 'components/TaskBoardEmpty';

import TaskBoard from './';

jest.mock('components/TaskBoardEmpty', () => () => (<div />));
jest.mock('containers/Task', () => () => (<div />));


describe('#components/TaskBoard', () => {
  it('should show TaskBoardEmpty if tasks is empty array', () => {
    const tasks = [];
    const wrapper = shallow(<TaskBoard tasks={tasks} />);
    expect(wrapper.find(TaskBoardEmpty)).toHaveLength(1);
  });

  it('should show each Task component and set task as props in it', () => {
    const tasks = [{
      id: 0,
      title: 'zero title',
    }, {
      id: 1,
      title: 'first title',
    }, {
      id: 2,
      title: 'second title',
    }];
    const wrapper = shallow(<TaskBoard tasks={tasks} />);
    expect(wrapper.find(Task)).toHaveLength(tasks.length);
    wrapper.find(Task).forEach((node, index) => {
      expect(node.props().task).toEqual(tasks[index]);
    });
  });
});
