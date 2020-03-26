import React from 'react';

import { ErrorMessageWidgetStyles } from './ErrorMessageWidget.Styles';

// It is recommended to keep components stateless and use redux for managing states
const ErrorMessageWidget = (props) => {
  if (!props.isOpen) {
    return null;
  }

  return (
    <ErrorMessageWidgetStyles>
        {props.message}
      <i className="accented" onClick={props.dismissBar}>
        close
      </i>
    </ErrorMessageWidgetStyles>
  );
};

export default ErrorMessageWidget;
