import React from 'react';

const styleListItem = {
  'border-left': '1px solid black',
  'float': 'left',
  'padding': '1em 1em'
}

const AgentStateListItem = (props) => {
  return (
    <div style={styleListItem}>
      {props.value.quantity} {props.value.name} <span></span>
    </div>
  );
};

export default AgentStateListItem;