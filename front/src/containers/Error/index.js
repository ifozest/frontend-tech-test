import { connect } from 'react-redux';

import Error from 'components/Error';

const mapStateToProps = ({ error }) => ({
  error,
});

export default connect(mapStateToProps)(Error);
