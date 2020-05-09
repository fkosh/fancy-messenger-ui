import React from 'react';

import { connect } from 'react-redux';

import { Layout } from 'antd';

import Authorization from '../../components/Authorization/Authorization';
import Messenger1 from '../../components/Messenger1/Messenger1';

import './App1.css';

const App1 = ({ currentUser }) => (
    <Layout className="App" style={{ backgroundColor: "transparent" }}>
        {currentUser.accessToken ? <Messenger1 user={currentUser} /> : <Authorization />}
    </Layout>
);

const mapStateToProps = state => ({
    currentUser: state.currentUser
});

export default connect(mapStateToProps)(App1);
