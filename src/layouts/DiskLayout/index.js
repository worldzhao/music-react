import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { routesConfig } from '@router'

function DiskLayout() {
  return (
    <Switch>
      {routesConfig.map(r => (
        <Route {...r} key={r.path} />
      ))}
    </Switch>
  )
}

export default DiskLayout
