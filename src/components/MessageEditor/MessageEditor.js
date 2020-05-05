import React from 'react';

import { Form, Button, Input } from 'antd';

import { SendOutlined } from '@ant-design/icons';

import './MessageEditor.css';

const { TextArea } = Input;

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

  return (
    <Form className="MessageEdior" layout="inline" name="add-message" onFinish={onFinish}>
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

export default MessageEditor;
