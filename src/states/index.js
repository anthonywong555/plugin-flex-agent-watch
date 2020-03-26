import { combineReducers } from 'redux';

import { reduce as AgentWatchWidgetReducer } from './AgentWatchWidgetState';
import { reduce as ErrorMessageWidgetReducer } from './ErrorMessageWidgetState';

// Register your redux store under a unique namespace
export const namespace = 'flex-agent-watch';

// Combine the reducers
export default combineReducers({
  agentWatchWidget: AgentWatchWidgetReducer,
  errorMessageWidget: ErrorMessageWidgetReducer
});
