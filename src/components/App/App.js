import React from 'react';
import PropTypes from 'prop-types';

import './App.css';

import UsersList from '../UsersList/UsersList'
import MessageEditor from '../MessageEditor/MessageEditor'
import MessagesStory from '../MessagesStory/MessagesStory'

const App = () => (
  <div className="App">
    <div class="layout">
      <UsersList/>
      <MessagesStory/>
    </div>
  </div>
);

App.propTypes = {};

App.defaultProps = {};

export default App;
