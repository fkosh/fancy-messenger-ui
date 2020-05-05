import React from 'react';

import './Message.css';

const Message = (props) => {

  const user = {
    id: 1,
    displayName: "Ivan Ivanov"
  };

  return (
    <div className="Message">
      <div>
        <b>{props.message.senderId === user.id ? 'Вы' : 'Собеседник'}</b> <span style={{'color': '#a0a0a0', 'fontSize': '12px'}}>{props.message.time}</span>
      </div>
      <div style={{'paddingLeft': '10px'}}>{props.message.text}</div>
    </div>
  );
};

export default Message;
