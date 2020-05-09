import React, { useState } from 'react';

import { Layout, Button } from 'antd';

import Logo from '../Logo/Logo';
import ContactsList from '../ContactsList/ContactsList';
import UserMenu1 from '../UserMenu1/UserMenu1';

import './Messenger1.css';
import MessageEditor from '../MessageEditor/MessageEditor';

const { Sider, Header, Content, Footer } = Layout;

// <Sider collapsible={true} collapsedWidth="600"
const Messenger1 = ({ user }) => {

    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout className="Messenger1">
            <Sider width="230" trigger={null} collapsible collapsed={collapsed}>
                <Logo inverted={true} size="medium" collapsed={collapsed} onClick={() => setCollapsed(!collapsed)} />
                <ContactsList user={user} />
                <UserMenu1 user={user} />
            </Sider>
            <Layout style={{ minWidth: 360 }}>
                <Header>
                    Header
            </Header>
                <Content>
                    Content
            </Content>
                <Footer>
                    <MessageEditor />
                </Footer>
            </Layout>
        </Layout>
    )
};

export default Messenger1;
