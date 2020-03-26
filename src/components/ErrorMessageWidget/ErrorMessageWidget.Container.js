import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions } from '../../states/ErrorMessageWidgetState';
import ErrorMessageWidget from './ErrorMessageWidget';
import { namespace } from '../../states/index';

const mapStateToProps = (state) => ({
    isOpen: state[namespace].errorMessageWidget.modal.isOpen,
    isError: state[namespace].errorMessageWidget.error.isError,
    message: state[namespace].errorMessageWidget.error.message
});

const mapDispatchToProps = (dispatch) => ({
  dismissBar: bindActionCreators(Actions.dismissBar, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessageWidget);