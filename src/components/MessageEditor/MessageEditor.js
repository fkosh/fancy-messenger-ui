import React from 'react';
import PropTypes from 'prop-types';

import { Form, Button, Input } from 'antd';

import { SendOutlined } from '@ant-design/icons';

import './MessageEditor.css';

const { TextArea } = Input;

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

  const onChange = values => {
    console.log(values);
  };

  const onSubmit = values => {
    console.log(values);
  };

  const submitting = false;

  const value = "test";

  return (
    <Form className="MessageEdior" layout="inline" name="add-message" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item>
        <TextArea autoSize={{ minRows: 1, maxRows: 1 }} onChange={onChange} />
      </Form.Item>
      <Form.Item className="MessageEditorButton">
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          <SendOutlined />
        </Button>
      </Form.Item>
    </Form>
  );
};

MessageEditor.propTypes = {};

MessageEditor.defaultProps = {};

export default MessageEditor;
