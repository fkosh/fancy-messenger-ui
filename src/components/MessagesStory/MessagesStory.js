import React from 'react';
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'

import { List } from 'antd';

import './MessagesStory.css';
import Message from '../Message/Message';


import { fetchConversationMessages } from '../../actions';

const MessagesStory = ({messages, interlocutorId}) => {
  
  console.log("!!!")

  const dispatch = useDispatch()
  // TODO
  //dispatch(fetchConversationMessages(interlocutorId))

  return (
    <List
      className="MessagesStory"
      size="large"
      dataSource={messages}
      renderItem={message => <List.Item><Message message={message} /></List.Item>}
    />
  );
};

const mapStateToProps = state => ({
  messages: state.conversation.messages.items
})

export default connect(mapStateToProps)(MessagesStory)
