import React from 'react';

import { Card, Menu } from 'antd';

import User from '../User/User';
// import UserMenu from '../UserMenu/UserMenu';

import './UsersList.css';

const UsersList = (props) => {

  const handleClick = e => {
    console.log('click ', e);
  };

  const logo = (
    <div>
      <img width="40px" src="logo-inverted.png" alt="Fancy Messenger"/>
      <h3><span className="capital">F</span>ancy <span className="capital">M</span>essenger</h3>
    </div>
  );

  return (
    <Card className="UsersList" bordered={false} title={logo}>
      <Menu onClick={handleClick} theme="dark" mode="inline">
        {props.users.items.map((user) => <Menu.Item key={user.id}> <User user={user} /> </Menu.Item>)}
      </Menu>
      {/* <UserMenu user={props.users.items[0]} /> */}
    </Card>
  );
};

export default UsersList;
