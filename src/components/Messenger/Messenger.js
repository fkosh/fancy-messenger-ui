import React from 'react';
import PropTypes from 'prop-types';

import { Card, Divider } from 'antd';

import MessagesStory from '../MessagesStory/MessagesStory'
import MessageEditor from '../MessageEditor/MessageEditor'

import './Messenger.css';

const Messenger = (props) => {

  return (
    <Card className="Messenger" bordered={false} title={props.interlocutor.displayName}>
      <MessagesStory/>
      <MessageEditor/>
    </Card>
  );
};

Messenger.propTypes = {};

Messenger.defaultProps = {};

export default Messenger;
