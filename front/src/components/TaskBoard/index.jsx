import React from 'react';
import PropTypes from 'prop-types';

import Task from 'containers/Task';
import TaskBoardEmpty from 'components/TaskBoardEmpty';

const propTypes = {
  tasks: PropTypes.array.isRequired,
};

/**
 * Task Board, display tasks
 * if tasks is empty - display TaskBoardEmpty component
 * @param {Object[]} tasks - tasks to display
 */
const TaskBoard = ({ tasks }) => {
  if (tasks.length < 1) {
    return (<TaskBoardEmpty />);
  }

  return (
    <div className="board">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
        />
      ))}
    </div>
  );
};

TaskBoard.propTypes = propTypes;

export default TaskBoard;
