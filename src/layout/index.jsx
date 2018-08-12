import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import { Routes, Links } from '../router'
import NotFound from '../views/404'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Menu from '../component/Menu'
import './style.styl'

class BasicLayout extends Component {
  componentDidMount() {
    // do sth
  }
  render() {
    return (
      <div className="basic-layout">
        <Header />
        <section id="main">
          <Menu>{Links}</Menu>
          <div className="content">
            <Switch>
              <Redirect from="/" exact to="/findmusic/playlist" />
              {Routes}
              <Route component={NotFound} />
            </Switch>
          </div>
        </section>
        <Footer {...this.props} />
      </div>
    )
  }
}

export default BasicLayout
