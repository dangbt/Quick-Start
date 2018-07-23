/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import * as select from './selector';
import * as userSelector from '../../appSelector/userSelector';
import * as actions from './actions';
import messages from './messages';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import Header from '../../components/Header';
import { FECTH_ALL_USER } from '../../appReducer.js/userReducer/constants';

/* eslint-disable react/prefer-stateless-function */
class HomePage extends React.PureComponent {
  render() {
    return (
      <h1>
        <Button onClick={this.props.getUser}>Click !!!</Button>
        <Button theme="extended" onClick={this.props.localChange}>
          Click !!!
        </Button>
        <button onClick={this.props.getUser}>click!!!</button>
        <br />
        <FormInput
          label="First Name:"
          // onChange={() => alert('a')}
          // onBlur={() => alert('a')}
        />
        <FormInput placeholder="First Name" />
        <FormattedMessage {...messages.header} />
        <Header>Header</Header>
      </h1>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  route: select.getRoute(),
  user: userSelector.getUser(),
});

const mapDispatchToProps = dispatch => ({
  localChange: () => dispatch(actions.localChange()),
  getUser: () => dispatch({ type: FECTH_ALL_USER }),
});

HomePage.propTypes = {
  localChange: PropTypes.func,
  getUser: PropTypes.func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
