import React from 'react';
import PropTypes from 'prop-types';

import { Form, Input, InputNumber, Button } from 'antd';

import './MessageEditor.css';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const MessageEditor = () => {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <Form layout="inline" name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item name={['user', 'introduction']}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Отправить</Button>
      </Form.Item>
    </Form>
  );
};

MessageEditor.propTypes = {};

MessageEditor.defaultProps = {};

export default MessageEditor;
