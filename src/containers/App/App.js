import React from 'react';
import { connect } from 'react-redux'

import UsersList from '../../components/UsersList/UsersList'
import Messenger from '../../components/Messenger/Messenger'

import './App.css'

export const App = ({ contacts, conversation }) => {
  let interlocutor
  if (conversation) {
    interlocutor = contacts.items.find(
      contact => contact.id === conversation.interlocutorId
    )
  }

  return (
    <div className="App">
      <UsersList users={contacts} />
      <Messenger interlocutor={interlocutor} />
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts,
  conversation: {
    interlocutorId: state.conversation.interlocutorId
  }
})

export default connect(mapStateToProps)(App)