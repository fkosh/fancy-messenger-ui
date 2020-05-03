import React from 'react';
import PropTypes from 'prop-types';

import { List, Typography, Divider } from 'antd';

import './UsersList.css';

const UsersList = () => {
  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  return (
    <List
      size="large"
      header={<div>Users</div>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  );
};

UsersList.propTypes = {};

UsersList.defaultProps = {};

export default UsersList;
