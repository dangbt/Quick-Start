import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const Label = styled.label`
  display: block;
  font-size: ${props => (props.fontSize && props.fontSize) || '14px'};
  color: ${props => (props.color && props.color) || 'gray'};
`;
const Input = styled.input`
  display: block;
  outline: none;
  border-bottom: 1px solid gray;
  font-size: ${props => (props.fontSize && props.fontSize) || '18px'};
  width: ${props => (props.width && props.width) || '100%'};
`;

const FormInput = props => {
  const { label, placeholder, onChange, onBlur } = props;
  return (
    <div>
      <Label>{label}</Label>
      <Input placeholder={placeholder} onChange={onChange} onBlur={onBlur} />
    </div>
  );
};
FormInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
};

export default FormInput;
