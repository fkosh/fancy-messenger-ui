import React from 'react';

import { Card } from 'antd';

import MessagesStory from '../MessagesStory/MessagesStory'
import MessageEditor from '../MessageEditor/MessageEditor'

import './Messenger.css';

const Messenger = (props) => {

  return (
    <Card className="Messenger" bordered={false} title={props.interlocutor.displayName}>
      <MessagesStory/>
      <MessageEditor/>
    </Card>
  );
};

export default Messenger;
