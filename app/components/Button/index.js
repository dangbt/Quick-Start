import React from 'react';
import { MainButton, ExtendedButton } from './styled';

class Button extends React.PureComponent {
  render() {
    const { props } = this;
    switch (props.theme) {
      case 'extended':
        return (
          <div>
            <ExtendedButton {...props} />
          </div>
        );
      default:
        return <MainButton {...props} />;
    }
  }
}

export default Button;
