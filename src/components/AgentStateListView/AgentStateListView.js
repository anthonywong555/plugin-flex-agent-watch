import React from 'react';

import AgentStateListItem from '../AgentStateListItem/AgentStateListItem';

const AgentStateListView = (props) => {
  const {queues} = props;

  return (
    <div>
      {queues.map((value, index) => {
        return <AgentStateListItem key={index} value={value} />
      })}
    </div>
  );
};

export default AgentStateListView;
