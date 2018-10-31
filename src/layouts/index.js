import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import NotFound from '@views/404'
import BasicLayout from './BasicLayout'
import DiskLayout from './DiskLayout'

class Layout extends Component {
  componentDidMount() {
    // do sth
  }

  render() {
    return (
      <Switch>
        <Redirect from="/" exact to="/findmusic/playlist" />
        <Route path="/song" render={props => <DiskLayout {...props} />} />
        <Route path="/" render={props => <BasicLayout {...props} />} />
        <Route component={NotFound} />
      </Switch>
    )
  }
}

export default Layout
