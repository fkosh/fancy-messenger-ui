import React, { useState } from 'react'

import { Layout, Card, Button, Divider } from 'antd';

import Logo from '../../components/Logo/Logo';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './Authorization.css';

const { Content } = Layout;

// Dont give a * just create new one

const Authorization = () => {
    const [signInMode, setSignInMode] = useState(false);

    return (
        <Layout className="Authorization">
            <Content>          
                <Logo size="large" inverted={false} />
                <Card bordered={false}>
                    {signInMode ? <SignIn /> : <SignUp />}
                    <Divider style={{ marginTop: 8, marginBottom: 8 }} plain>or</Divider>
                    <Button onClick={() => setSignInMode(!signInMode)} block>
                        {signInMode ? "Sign Up" : "Sign In"}
                    </Button>
                </Card>
            </Content>
        </Layout>
    );
};

export default Authorization;
