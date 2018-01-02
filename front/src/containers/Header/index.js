import { connect } from 'react-redux';

import Header from 'components/Header';
import { addTask } from 'actions/task';

const mapDispatchToProps = dispatch => ({
  addTask: (task) => {
    dispatch(addTask(task));
  },
});

export default connect(null, mapDispatchToProps)(Header);
