import React, { Component } from 'react';

import { namespace } from '../../states/index';
import AgentStateListView from '../AgentStateListView/AgentStateListView';

export default class AgentWatchWidget extends Component {
  constructor(props) {
    super(props);

    const {workerClient} = this.props.manager;
    const {activities} = workerClient;
    const workerStates = [...activities.values()]; 

    this.props.setWorkerState(workerStates);
  }

  componentDidMount() {
    const {insightsClient} = this.props.manager;
    insightsClient.liveQuery('tr-worker', '').then((q) => {
      this.props.setWorkersList(q.getItems());
      this.props.updateWorkerStateQueues();

      q.on('itemUpdated', item => {
          this.props.updateWorker(item);
          this.props.updateWorkerStateQueues();
      });

      q.on('error', e => {
        this.reportError(e);
      });

    }).catch(e => {
      this.reportError(e);
    })
  }

  reportError(e) {
    this.props.setErrorMessage(`
      An error has occured with the Plugin-${namespace}.\n
      Please take a note of this error messsage down below and remove Plugin-${namespace}.js
      in Twilio Assets.

      Error Message: \n${e}
    `);
  }

  render() {
    if(this.props.isError) {
      return null
    } else {
      return (
        <AgentStateListView queues={this.props.queues} />
      )
    }
  }
}