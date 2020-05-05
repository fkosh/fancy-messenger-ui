import ReactDOM from 'react-dom'
import React from 'react'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import App from './containers/App/App'
import reducer from './reducers'
import { fetchContacts } from './actions'

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger())
)

store.dispatch(fetchContacts())

ReactDOM.render(
  <Provider store={store}>
     <App />
  </Provider>,
  document.getElementById('root')
);
