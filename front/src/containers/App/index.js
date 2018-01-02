import { connect } from 'react-redux';

import { fetchTasks } from 'actions/task';
import App from 'components/App';


const mapDispatchToProps = dispatch => ({
  fetchTasks: () => {
    dispatch(fetchTasks());
  },
});

export default connect(null, mapDispatchToProps)(App);
