import ReactDOM from 'react-dom';
import React from 'react';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

import App1 from './containers/App1/App1';
import { saveState, loadState } from './localStorage';
import reducer from './reducers';

import './index.css';

const store = createStore(
    reducer,
    loadState(),
    composeWithDevTools(
        applyMiddleware(thunkMiddleware, createLogger())
    )
);

store.subscribe(() => saveState({
    currentUser: store.getState().currentUser
}));

ReactDOM.render(
    <>
        <Provider store={store}>
            <App1 />
        </Provider>
        <Button
            className="AppSourceLink"
            shape="circle"
            icon={<GithubOutlined />}
            size="large"
            type="dashed" ghost
        />
    </>,
    document.getElementById('root')
);
