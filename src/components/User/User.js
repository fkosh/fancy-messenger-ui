import React from 'react';
import PropTypes from 'prop-types';

import { Avatar } from 'antd';
import Identicon from 'react-identicons';

import './User.css';

const User = (props) => (
  <div className="User">
    <Avatar
      shape="square"
      style={{ padding: '4px', backgroundColor: 'rgb(240, 242, 245)' }}
      icon={<Identicon string={props.user.displayName} size={22} />}
    />
    <span>{props.user.displayName}</span>
    <span>
      <svg height="10px" width="10px">
        <circle cx="5" cy="5" r="5" fill={props.user.isOnline ? 'green' : 'red'} />
      </svg>
    </span>
  </div>
);

User.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    isOnline: PropTypes.bool
  })
};

User.defaultProps = {
  user: {
    displayName: "NaN",
    isOnline: false
  }
};

export default User;
