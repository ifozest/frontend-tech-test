import { connect } from 'react-redux';

import Task from 'components/Task';

import { deleteTask, updateTask } from 'actions/task';

const mapDispatchToProps = dispatch => ({
  deleteTask: (id) => {
    dispatch(deleteTask(id));
  },
  updateTask: (task) => {
    dispatch(updateTask(task));
  },
});

export default connect(null, mapDispatchToProps)(Task);
