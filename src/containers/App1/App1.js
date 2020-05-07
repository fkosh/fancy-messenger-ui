import React from 'react'

import { connect } from 'react-redux'

import { Layout } from 'antd'

import Authorization from '../../components/Authorization/Authorization'
import Messenger from '../../components/Messenger/Messenger'

import './App1.css';

const App1 = ({ user }) => (
    <Layout className="App">
        {user ? <Messenger user={user} /> : <Authorization />}
    </Layout>
)

const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps)(App1)
