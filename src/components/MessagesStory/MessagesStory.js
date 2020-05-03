import React from 'react';
import PropTypes from 'prop-types';

import { List, Typography, Divider } from 'antd';

import './MessagesStory.css';
import MessageEditor from '../MessageEditor/MessageEditor';

const MessagesStory = () => {
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
      style={{ width: '100%' }}
      header={<div>UserName</div>}
      footer={<MessageEditor/>}
      bordered
      dataSource={data}
      renderItem={item => <List.Item>{item}</List.Item>}
    />
  );
};

MessagesStory.propTypes = {};

MessagesStory.defaultProps = {};

export default MessagesStory;
