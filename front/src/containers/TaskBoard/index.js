import { connect } from 'react-redux';

import TaskBoard from 'components/TaskBoard';

const mapStateToProps = ({ tasks }) => ({
  tasks,
});

export default connect(mapStateToProps)(TaskBoard);
