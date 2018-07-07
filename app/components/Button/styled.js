import styled from 'styled-components';

export const MainButton = styled.button`
  color: black;
  outline: none;
  cursor: pointer;
  font-size: 0.875rem;
  min-width: 88px;
  border-radius: 4px;
  padding: 8px 16px;
  line-height: 1.4em;
  align-item: center;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: rgba(33, 150, 243, 0.08);
  }
  ${props => props.styled};
`;

export const ExtendedButton = MainButton.extend`
  color: red;
  background: green;
  ${props => props.styled};
`;
