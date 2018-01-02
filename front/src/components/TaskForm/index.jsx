import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

const defaultProps = {
  task: {
    title: '',
    description: '',
  },
};

/**
 * View to edit task
 */
class TaskForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.task.title,
      description: this.props.task.description,
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  onTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onDescriptionChange(e) {
    this.setState({
      description: e.target.value,
    });
  }

  handleCancel() {
    this.props.onCancel(this.props.task.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.title) {
      const { title, description } = this.state;
      this.props.onSubmit({
        id: this.props.task.id,
        title,
        description,
      });
    }
  }

  render() {
    return (
      <form
        className="form"
        onSubmit={this.handleSubmit}
      >
        <div className="form_group">
          <label
            className="form_label"
            htmlFor="title"
          >Title</label>
          <input
            autoComplete="off"
            autoFocus
            className="form_control"
            maxLength="256"
            name="title"
            onChange={this.onTitleChange}
            placeholder="What to do..."
            type="text"
            value={this.state.title}
          />
        </div>
        <div className="form_group">
          <label
            className="form_label"
            htmlFor="description"
          >Description</label>
          <textarea
            className="form_control"
            maxLength="1024"
            name="description"
            onChange={this.onDescriptionChange}
            placeholder="More info..."
            rows="3"
            value={this.state.description}
          />
        </div>
        <div className="form_actions">
          <button
            className="btn btn-cancel"
            onClick={this.handleCancel}
            type="button"
          >Cancel
          </button>
          <button
            className="btn btn-submit"
            type="submit"
          >Save
          </button>
        </div>
      </form>
    );
  }
}

TaskForm.propTypes = propTypes;
TaskForm.defaultProps = defaultProps;

export default TaskForm;
