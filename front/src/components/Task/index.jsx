import React from 'react';
import PropTypes from 'prop-types';

import TaskForm from 'components/TaskForm';
import TaskView from 'components/TaskView';

const propTypes = {
  deleteTask: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  updateTask: PropTypes.func.isRequired,
};

/**
 * Display task
 * based on editMode flag displays TaskForm or TaskView
 */
class Task extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };

    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  toggleEditMode() {
    const editMode = !this.state.editMode;
    this.setState({
      editMode,
    });
  }

  updateTask(task) {
    this.toggleEditMode();
    this.props.updateTask(task);
  }

  deleteTask(id) {
    this.props.deleteTask(id);
  }

  render() {
    let view;

    if (this.state.editMode) {
      view = (
        <TaskForm
          onCancel={this.toggleEditMode}
          onSubmit={this.updateTask}
          task={this.props.task}
        />
      );
    } else {
      view = (
        <TaskView
          onEdit={this.toggleEditMode}
          onRemove={this.deleteTask}
          task={this.props.task}
        />
      );
    }
    return (
      <div className="task">
        {view}
      </div>
    );
  }
}

Task.propTypes = propTypes;

export default Task;
