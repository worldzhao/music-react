import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import BasicLayout from './BasicLayout'
import store from './store'

import './common/style/reset.css'
import './common/style/fonts.css'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="music-react">
      <BasicLayout />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
