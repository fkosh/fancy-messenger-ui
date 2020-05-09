import React, { useState } from 'react';

import { Menu, Button, Avatar } from 'antd';
import { PieChartOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import Identicon from 'react-identicons';

import './ContactsList.css';

const ContactsList = ({ contacts }) => {

    const contacts1 = {
        items: [
            {
                id: 1,
                username: "Ivan"
            },
            {
                id: 2,
                username: "Petr"
            }
        ]
    };

    return (
        <div className="ContactsList">

            <Menu theme="dark" mode="inline">
                {contacts1.items.map((contact) => <Menu.Item key={contact.id}>
                    <>
                    <Avatar
                        shape="square"
                        style={{ padding: '4px', backgroundColor: 'rgb(240, 242, 245)' }}
                        icon={<Identicon string={contact.username} size={22} />}
                    />
                    <span style={{marginLeft: 16}}>{contact.username}</span>
                    </>
                </Menu.Item>)}
            </Menu>
        </div>
    );
};

export default ContactsList;
