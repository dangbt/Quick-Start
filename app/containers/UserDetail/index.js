import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

// import injectSaga from 'common/injectSaga';
import injectReducer from 'common/injectReducer';
// import reducer from '../../appReducer/userReducer';
// import saga from './saga';

import { isLoading } from '../../appSelector/userSelector';
import { getUserRequest } from '../../appReducer/userReducer/actions';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class UserDetail extends React.Component {
  render() {
    const { isLoading, getUserRequest } = this.props;
    return (
      <div>
        <p>{`${isLoading}`}</p>
        <button onClick={getUserRequest}>Click me</button>
        {console.log(isLoading)}
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
      </div>
    );
  }
}

UserDetail.propTypes = {
  isLoading: PropTypes.bool,
  getUserRequest: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: isLoading(),
});

const mapDispatchToProps = dispatch => ({
  getUserRequest: () => dispatch(getUserRequest()),
});

const withRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
);
// const withReducer = injectReducer({ key: 'user', reducer });
// const withSaga = injectSaga({ key: 'user', saga });

export default compose(
  withRedux,
  // withReducer,
  // withSaga,
)(UserDetail);
