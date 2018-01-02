import { connect } from 'react-redux';

import TaskBoardFooter from 'components/TaskBoardFooter';

import { fetchTasks } from 'actions/task';

const mapDispatchToProps = dispatch => ({
  loadMore: () => {
    dispatch(fetchTasks());
  },
});

export default connect(null, mapDispatchToProps)(TaskBoardFooter);
