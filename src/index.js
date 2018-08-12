import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import BasicLayout from './layout'
import store, { history } from './store'
import './config/axios'

import './common/style/reset.css'
import './common/style/fonts.css'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BasicLayout />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)
