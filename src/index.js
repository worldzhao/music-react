import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension' // eslint-disable-line

import reducers from './redux/'

import Dashboard from './views/dashboard/'
import './common/style/reset.css'
import './common/style/fonts.css'

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'),
)
