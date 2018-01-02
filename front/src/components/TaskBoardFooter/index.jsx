import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  loadMore: PropTypes.func.isRequired,
};

/**
 * Task Board Footer
 */
const TaskBoardFooter = ({ loadMore }) => {
  return (
    <div className="board-footer">
      <button
        className="btn btn-action"
        onClick={loadMore}
      >Load more ->
      </button>
    </div>
  );
};

TaskBoardFooter.propTypes = propTypes;

export default TaskBoardFooter;
