import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NotFound from '@views/404'
import BasicLayout from './BasicLayout'
import DiskLayout from './DiskLayout'

function Layout() {
  return (
    <Switch>
      <Redirect from="/" exact to="/explore" />
      <Route path="/song" render={props => <DiskLayout {...props} />} />
      <Route path="/" render={props => <BasicLayout {...props} />} />
      <Route component={NotFound} />
    </Switch>
  )
}

export default Layout
