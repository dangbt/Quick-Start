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
import messages from './messages';
import Button from '../../components/Button';
import FormInput from '../../components/FormInput';
import Header from '../../components/Header';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <h1>
        <Button>Click !!!</Button>
        <Button theme="extended">Click !!!</Button>
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
