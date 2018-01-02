import { connect } from 'react-redux';

import LoadingIndicator from 'components/LoadingIndicator';

const mapStateToProps = ({ loading }) => ({
  loading,
});

export default connect(mapStateToProps)(LoadingIndicator);
