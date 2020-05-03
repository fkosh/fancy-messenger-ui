import React from 'react';
import PropTypes from 'prop-types';

import { Card, Menu } from 'antd';

import { users } from '../../api/users';

import User from '../User/User';

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

  return (
    <Card className="UsersList" title="Пользователи">
      <Menu onClick={handleClick} mode="inline">
        {users.map((user) => <Menu.Item key={user.id}> <User user={user} /> </Menu.Item> )}
      </Menu>
      <User user={users[0]} />
    </Card>
  );
};

export default UsersList;
