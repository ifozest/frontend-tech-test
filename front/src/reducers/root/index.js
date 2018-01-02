import { combineReducers } from 'redux';

import loading from 'reducers/loading';
import tasks from 'reducers/tasks';
import error from 'reducers/error';

const rootReducer = combineReducers({
  loading,
  tasks,
  error,
});

export default rootReducer;
