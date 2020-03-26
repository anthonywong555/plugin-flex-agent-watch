import { default as styled } from 'react-emotion';

export const ErrorMessageWidgetStyles = styled('div')`
  padding: 10px;
  margin: 0px;
  color: #fff;
  background: #000;
  white-space: pre-line;

  .accented {
    color: red;
    cursor: pointer;
    float: right;
  }
`;
