import React from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from 'containers/LoadingIndicator';
import TaskForm from 'components/TaskForm';

const propTypes = {
  addTask: PropTypes.func.isRequired,
};

/**
 * Header
 * contains button 'Add Task' and LoadingIndicator
 * on click button expands TaskForm
 */
class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  toggleDisplay() {
    const displayForm = !this.state.displayForm;
    this.setState({
      displayForm,
    });
  }

  addTask(task) {
    this.toggleDisplay();
    this.props.addTask(task);
  }

  render() {
    let form;
    if (this.state.displayForm) {
      form = (
        <div className="header_dropdown">
          <div className="header_dropdown_content">
            <TaskForm
              onCancel={this.toggleDisplay}
              onSubmit={this.addTask}
            />
          </div>
        </div>
      );
    }

    return (
      <header className="header">
        <div className="header_menu">
          <h1 className="header_menu_logo">TODO BOARD</h1>
          <div className="header_menu_actions">
            <button
              className="btn btn-menu add-task"
              onClick={this.toggleDisplay}
              type="button"
            >Add Task
            </button>
          </div>
          <div className="header_menu_loader">
            <LoadingIndicator />
          </div>
        </div>
        {form}
      </header>
    );
  }
}

Header.propTypes = propTypes;

export default Header;
