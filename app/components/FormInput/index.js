import React from 'react';
import FormInput from './styled';

class Button extends React.PureComponent {
  render() {
    const { props } = this;
    switch (props.theme) {
      default:
        return <FormInput {...props} />;
    }
  }
}

export default Button;
