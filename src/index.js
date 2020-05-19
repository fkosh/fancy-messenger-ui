import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './_helpers';
import App from './components/App';
import AppSourceLink from './components/AppSourceLink';

import './index.css';


ReactDOM.render(
    <Provider store={store}>
        <App />
        <AppSourceLink />
    </Provider>,
    document.getElementById('root')
);
