import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

// import injectSaga from 'common/injectSaga';
import injectReducer from 'common/injectReducer';
import reducer from './reducer';
// import saga from './saga';

import * as select from './selector';
import * as actions from './actions';

import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class UserDetail extends React.Component {
  render() {
    const { isLoading, getUserDetail } = this.props;
    return (
      <div>
        <p>{isLoading}</p>
        <button onClick={getUserDetail}>Click</button>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
      </div>
    );
  }
}

UserDetail.propTypes = {
  isLoading: PropTypes.bool,
  getUserDetail: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  isLoading: select.isLoading(),
});

const mapDispatchToProps = dispatch => ({
  getUserDetail: () => dispatch(actions.getUserDetail()),
});

const withRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'userDetail', reducer });
// const withSaga = injectSaga({ key: 'userDetail', saga });

export default compose(
  withRedux,
  withReducer,
  //   withSaga,
)(UserDetail);
