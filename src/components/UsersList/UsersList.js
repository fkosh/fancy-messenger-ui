import React from 'react';
import { connect } from 'react-redux'

import { Card, Menu } from 'antd';

import User from '../User/User';
import UserMenu from '../UserMenu/UserMenu';

import { selectConversation } from '../../actions'

import './UsersList.css';


const UsersList = ({users, handleClick}) => {


  const logo = (
    <div>
      <img width="40px" src="logo-inverted.png" alt="Fancy Messenger"/>
      <h3><span className="capital">F</span>ancy <span className="capital">M</span>essenger</h3>
    </div>
  );

  let userMenu 
  if (users && users.items[0]) {
    userMenu = <UserMenu user={users.items[0]} />
  }

  return (
    <Card className="UsersList" bordered={false} title={logo}>
      <Menu onClick={handleClick} theme="dark" mode="inline">
        {users.items.map((user) => <Menu.Item key={user.id}> <User user={user} /> </Menu.Item>)}
      </Menu>
      {userMenu}
    </Card>
  );
};

const mapDispatchToProps = dispatch => ({
  handleClick: event => dispatch(selectConversation(event.key))
})

export default connect(null, mapDispatchToProps)(UsersList)
