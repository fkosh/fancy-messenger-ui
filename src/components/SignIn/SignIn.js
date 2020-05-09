import React from 'react';

import { connect } from 'react-redux';

import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import { fetchUserSignIn } from '../../actions';

import './SignIn.css';

const { Title } = Typography;

const SignIn = ({ onSubmit }) => {

    return (
        <>
            <Title level={3} style={{ textAlign: "center", marginBottom: 24 }}>Sign In</Title>
            <Form className="SignIn" name="signIn" initialValues={{ remember: true }} onFinish={onSubmit}>
                <Form.Item name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>

                <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
                    <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                </Form.Item>

                <Form.Item style={{ marginBottom: 0 }}>
                    <Button type="primary" htmlType="submit" block>Back to the party!</Button>
                </Form.Item>
            </Form>
        </>
    );
};

const mapDispatchToProps = dispatch => ({
    onSubmit: userCredentials => dispatch(fetchUserSignIn(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignIn);
