import React from 'react'


import { Card } from 'antd'

import MessagesStory from '../MessagesStory/MessagesStory'
import MessageEditor from '../MessageEditor/MessageEditor'

import './Messenger.css';

const Messenger = ({ interlocutor }) => {


  if (interlocutor) {
    return (
      <Card className="Messenger" bordered={false} title={interlocutor.username}>
        <MessagesStory interlocutorId={interlocutor.id}/>
        <MessageEditor/>
      </Card>
    )
  }

  return (
    <Card className="Messenger" bordered={false}>
      Select contact
    </Card>
  )
}

export default Messenger
