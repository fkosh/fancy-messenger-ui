import React from 'react';

import { connect } from 'react-redux'

import './App.css';

import UsersList from '../../components/UsersList/UsersList'
import Messenger from '../../components/Messenger/Messenger'

export const App = ({contacts}) => {
  
  const interlocutor = {
    displayName: "Petr Petrovich"
  };

  return (
    <div className="App">
      <div className="layout">
        <UsersList users={contacts}/>
        <Messenger interlocutor={interlocutor}/>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  contacts: state.contacts
})

export default connect(mapStateToProps)(App)