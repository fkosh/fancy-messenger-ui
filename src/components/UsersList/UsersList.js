import React from 'react';
import PropTypes from 'prop-types';

import { Card, Menu } from 'antd';

import { users } from '../../api/users';

import User from '../User/User';
import UserMenu from '../UserMenu/UserMenu';

import './UsersList.css';

const UsersList = () => {

  const users = [
    {
      "id": 1,
      "displayName": "Ivan Ivanov",
      "isOnline": true
    },
    {
      "id": 2,
      "displayName": "Petr Petrov",
      "isOnline": true
    },
    {
      "id": 3,
      "displayName": "Vasya Vasiliev",
      "isOnline": false
    }
  ];

  const handleClick = e => {
    console.log('click ', e);
  };

  const logo = (
    <div>
      <img width="40px" src="logo-inverted.png" />
      <h3><span className="capital">F</span>ancy <span className="capital">M</span>essenger</h3>
    </div>
  );

  return (
    <Card className="UsersList" bordered={false} title={logo}>
      <Menu onClick={handleClick} theme="dark" mode="inline">
        {users.map((user) => <Menu.Item key={user.id}> <User user={user} /> </Menu.Item>)}
      </Menu>
      <UserMenu user={users[0]} />
    </Card>
  );
};

export default UsersList;
