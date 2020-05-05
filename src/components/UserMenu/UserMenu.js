import React from 'react';
import './UserMenu.css';

import { Tooltip, Button, Avatar } from 'antd';
import Identicon from 'react-identicons';

import { LogoutOutlined } from '@ant-design/icons';

const UserMenu = (props) => (
  <div className="UserMenu">
    <Avatar
      shape="square"
      style={{ padding: '4px', backgroundColor: 'rgb(240, 242, 245)' }}
      icon={<Identicon string={props.user.username} size={22} />}
    />
    <span>{props.user.displayName}</span>
    <Tooltip title="Log out">
      <Button  ghost={true} icon={<LogoutOutlined />} />
    </Tooltip>
  </div>
);

export default UserMenu;