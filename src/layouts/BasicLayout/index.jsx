import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { routesConfig } from '@router'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Menu from '@components/Menu'
import './style.styl'

function BasicLayout(props) {
  return (
    <div className="soul-basic-layout">
      <Header />
      <div id="main">
        <Menu />
        <main>
          <Switch>
            {routesConfig.map(r => (
              <Route {...r} key={r.path} />
            ))}
          </Switch>
        </main>
      </div>
      <Footer {...props} />
    </div>
  )
}

export default BasicLayout
