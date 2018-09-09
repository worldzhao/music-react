import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import BasicLayout from './layouts/BasicLayout'
import store, { history } from './store'
import './config/axios'

import './common/style/reset.css'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route
          path="/"
          render={props => <BasicLayout {...props} />}
          redirectPath="/exception/403"
        />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)
