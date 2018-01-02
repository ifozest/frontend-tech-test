import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  error: PropTypes.string.isRequired,
};

const Error = ({ error }) => {
  let errorDiv;
  if (error) {
    errorDiv = (<div className="error_message">{error}</div>);
  }

  return (
    <div className="error">
      {errorDiv}
    </div>
  );
};

Error.propTypes = propTypes;

export default Error;
