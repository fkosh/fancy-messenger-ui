import React from 'react';
import PropTypes from 'prop-types';

import './App.css';

import UsersList from '../UsersList/UsersList'
import Messenger from '../Messenger/Messenger'
import Auth from '../Auth/Auth'

const App = () => {
  
  const interlocutor = {
    displayName: "Petr Petrovich"
  };

  return (
    <div className="App">
      <div className="layout">
        <UsersList/>
        <Messenger interlocutor={interlocutor}/>
      </div>
    </div>
  );
  
  // return (
  //   <div className="App">
  //     <div className="layout">
  //       <div>
  //         <img width="80px" src="logo.png"/>
  //         <h1><span style={{'color': 'red'}}>F</span>ancy <span style={{'color': 'red'}}>M</span>essenger</h1>
  //       </div>
  //       <UsersList/>
  //       <Messenger interlocutor={interlocutor}/>
  //     </div>
  //   </div>
  // );
};

App.propTypes = {};

App.defaultProps = {};

export default App;
