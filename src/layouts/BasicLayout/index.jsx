import React, { Component, Fragment } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import { Routes, Links } from '../../router'
import NotFound from '../../views/404'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import './style.styl'

class BasicLayout extends Component {
  componentDidMount() {
    // do sth
  }

  renderBasicLayout = () => (
    <Fragment>
      <Menu>{Links}</Menu>
      <div className="content">
        <Switch>
          {Routes}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Fragment>
  )

  // 歌词页面没有左侧菜单
  renderSongLayout = () => (
    <div className="content">
      <Switch>{Routes}</Switch>
    </div>
  )

  render() {
    return (
      <div className="basic-layout">
        <Header />
        <section id="main">
          <Switch>
            <Redirect from="/" exact to="/findmusic/playlist" />
            <Route path="/song" render={this.renderSongLayout} />
            <Route path="/" render={this.renderBasicLayout} />
            <Route component={NotFound} />
          </Switch>
        </section>
        <Footer {...this.props} />
      </div>
    )
  }
}

export default BasicLayout
