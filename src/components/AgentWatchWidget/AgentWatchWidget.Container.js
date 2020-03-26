import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Actions } from '../../states/AgentWatchWidgetState';
import { Actions as ErrorMessageWidgetActions } from '../../states/ErrorMessageWidgetState';
import AgentWatchWidget from './AgentWatchWidget';
import { namespace } from '../../states/index';

const mapStateToProps = (state) => ({
  workerStates: state[namespace].agentWatchWidget.workerStates,
  workers: state[namespace].agentWatchWidget.workers,
  queues: state[namespace].agentWatchWidget.queues,
  isError: state[namespace].errorMessageWidget.error.isError
});

const mapDispatchToProps = (dispatch) => ({
  setWorkerState: bindActionCreators(Actions.setWorkerState, dispatch),
  setWorkersList: bindActionCreators(Actions.setWorkersList, dispatch),
  updateWorker: bindActionCreators(Actions.updateWorker, dispatch),
  updateWorkerStateQueues: bindActionCreators(Actions.updateWorkerStateQueues, dispatch),
  setErrorMessage: bindActionCreators(ErrorMessageWidgetActions.setErrorMessage, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AgentWatchWidget);