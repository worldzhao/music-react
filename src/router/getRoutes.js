import React from 'react'
import { Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import Spin from '@components/Spin'

const createLoadableComp = path =>
  Loadable({
    loader: () => import(`../views/${path}`),
    loading: Spin,
    delay: 300, // 0.3 seconds
  })

export default (routes) => {
  const Routes = routes.map(r => (
    <Route key={r.path} path={r.path} component={createLoadableComp(r.view)} />
  ))
  return Routes
}
