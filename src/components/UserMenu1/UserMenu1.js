import React from 'react';

import { Tooltip, Button, Avatar } from 'antd';
import Identicon from 'react-identicons';

import { LogoutOutlined } from '@ant-design/icons';

import './UserMenu1.css';

const UserMenu1 = ({user}) => (
  <div className="UserMenu">
    <Avatar
      shape="square"
      style={{ padding: '4px', backgroundColor: 'rgb(240, 242, 245)' }}
      icon={<Identicon string={user.username} size={22} />}
    />
    <span>{user.username}</span>
    <Tooltip title="Log out">
      <Button ghost={true} icon={<LogoutOutlined />} />
    </Tooltip>
  </div>
);


export default UserMenu1;
