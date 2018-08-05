import React from 'react'
import { Route } from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from '../component/loading'

const createLoadableComp = path =>
  Loadable({
    loader: () => import(`../views/${path}/`),
    loading: Loading,
  })

export default (routes) => {
  const Routes = routes.map(r => (
    <Route key={r.path} path={r.path} component={createLoadableComp(r.view)} />
  ))
  return Routes
}
