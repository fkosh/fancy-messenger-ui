import React from 'react';
import PropTypes from 'prop-types';

import { List, Typography, Divider } from 'antd';

import './MessagesStory.css';
import Message from '../Message/Message';

const MessagesStory = () => {
  const data = [
    {
      "id": 1,
      "time": "11:11",
      "senderId": 1,
      "receiverId": 2,
      "text": "message 1"
    },
    {
      "id": 2,
      "time": "11:11",
      "senderId": 2,
      "receiverId": 3,
      "text": "message 1"
    },
    {
      "id": 3,
      "time": "11:11",
      "senderId": 1,
      "receiverId": 2,
      "text": "message 2"
    },
    {
      "id": 4,
      "time": "11:11",
      "senderId": 1,
      "receiverId": 2,
      "text": "message 3"
    }
  ];

  return (
    <List
      className="MessagesStory"
      size="large"
      dataSource={data}
      renderItem={item => <List.Item><Message message={item} /></List.Item>}
    />
  );
};

MessagesStory.propTypes = {};

MessagesStory.defaultProps = {};

export default MessagesStory;
