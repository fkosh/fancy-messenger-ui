import React from 'react'

import { Space } from 'antd';

import './Logo.css'

const Logo = ({ inverted, size }) => {

    const colorClass = inverted ? 'inverted' : 'default'

    const sizeClass = (size === 'large') ? 'large' : 'medium'

    return (
        <Space className={`Logo ${colorClass} ${sizeClass}`}>
            <img className="LogoImage" src={inverted ? 'inverted-logo.png' : 'default-logo.png'} alt="Fancy Messenger" />
            <div>Fancy</div>
            <div>Messenger</div>
        </Space>
    )
}

export default Logo
