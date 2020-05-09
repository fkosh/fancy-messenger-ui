import React from 'react'

import { Space } from 'antd';

import './Logo.css'

const Logo = ({ inverted, size, collapsed, onClick }) => {

    const colorClass = inverted ? 'inverted' : 'default'

    const sizeClass = (size === 'large') ? 'large' : 'medium'

    let content;

    if (collapsed) {
        content = (
            <Space className={`Logo ${colorClass} ${sizeClass}`}>
                <img className="LogoImage" src={inverted ? 'inverted-logo.png' : 'red-logo.png'} alt="Fancy Messenger" />
            </Space>
        );
    } else {
        content = (
            <Space className={`Logo ${colorClass} ${sizeClass}`}>
                <img className="LogoImage" src={inverted ? 'inverted-logo.png' : 'red-logo.png'} alt="Fancy Messenger" />
                <div>Fancy</div>
                <div>Messenger</div>
            </Space>
        );
    }

    if (onClick) {
        return (
            <button className="LogoButton" type="button" onClick={onClick}>
                {content}
            </button>
        );
    } else {
        return content;
    }
};

export default Logo;
