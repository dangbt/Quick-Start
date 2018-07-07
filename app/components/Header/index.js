import React from 'react';
import { Header } from './styled';

class Button extends React.PureComponent {
  render() {
    const { props } = this;
    switch (props.theme) {
      default:
        return <Header {...props} />;
    }
  }
}

export default Button;
