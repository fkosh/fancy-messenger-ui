import ReactDOM from 'react-dom'
import React from 'react'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import App1 from './containers/App1/App1'
import reducer from './reducers'
import { fetchContacts } from './actions'

import './index.css'

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware, createLogger())
)

store.dispatch(fetchContacts())

ReactDOM.render(
    <Provider store={store}>
        <App1 />
    </Provider>,
    document.getElementById('root')
)
