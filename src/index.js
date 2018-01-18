import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import reducers from './redux/index'

import Dashboard from './views/dashboard/index'
import './common/style/reset.css'
import './common/style/fonts.css'

const store = createStore(reducers, applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'),
)
