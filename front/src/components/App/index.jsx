import React from 'react';
import PropTypes from 'prop-types';

import Header from 'containers/Header';
import TaskBoard from 'containers/TaskBoard';
import TaskBoardFooter from 'containers/TaskBoardFooter';
import Error from 'containers/Error';

const propTypes = {
  fetchTasks: PropTypes.func.isRequired,
};

/**
 * Entry component of Application
 */
class App extends React.PureComponent {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    return (
      <div>
        <Header />
        <Error />
        <div className="container">
          <TaskBoard />
          <TaskBoardFooter />
        </div>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
