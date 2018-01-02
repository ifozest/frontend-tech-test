import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  loading: PropTypes.bool.isRequired,
};

/**
 * Loading Indicator
 * Indicates ajax request to the server
 */
const LoadingIndicator = ({ loading }) => {
  const className = loading ? 'loading-animation' : '';
  return (
    <div className={`loading ${className}`} />
  );
};

LoadingIndicator.propTypes = propTypes;

export default LoadingIndicator;
