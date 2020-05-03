import React from 'react';
import PropTypes from 'prop-types';

import './Message.css';

const Message = (props) => {

  const user = {
    id: 1,
    displayName: "Ivan Ivanov"
  };

  return (
    <div className="Message">
      <div>
        <b>{props.message.senderId == user.id ? 'Вы' : 'Собеседник'}</b> <span style={{'color': '#a0a0a0', 'font-size': '12px'}}>{props.message.time}</span>
      </div>
      <div style={{'padding-left': '10px'}}>{props.message.text}</div>
    </div>
  );
};

Message.propTypes = {};

Message.defaultProps = {};

export default Message;
