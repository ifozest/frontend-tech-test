import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onEdit: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

class TaskView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }

  handleEditClick() {
    this.props.onEdit(this.props.task.id);
  }

  handleRemoveClick() {
    this.props.onRemove(this.props.task.id);
  }

  render() {
    return (
      <div className="task-view">
        <div className="task-view_actions">
          <button
            className="btn btn-link btn-link-action task-view_actions_edit"
            onClick={this.handleEditClick}
            type="button"
          >Edit
          </button>
          <button
            className="btn btn-link btn-link-action task-view_actions_remove"
            onClick={this.handleRemoveClick}
            type="button"
          >Remove
          </button>
        </div>
        <h3 className="task-view_title">{this.props.task.title}</h3>
        <p className="task-view_description">{this.props.task.description || 'No info'}</p>
      </div>
    );
  }
}

TaskView.propTypes = propTypes;

export default TaskView;
