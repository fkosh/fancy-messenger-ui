import ReactDOM from 'react-dom';
import React  from 'react';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import App from './components1/App';
import AppSourceLink from './components1/AppSourceLink';
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
            <App />
        </Provider>
        <AppSourceLink />
    </>,
    document.getElementById('root')
);
