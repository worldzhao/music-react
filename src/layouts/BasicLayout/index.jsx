import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { Routes, Links } from '@router'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Menu from '@components/Menu'
import './style.styl'

class BasicLayout extends Component {
  componentDidMount() {
    // do sth
  }

  render() {
    return (
      <div className="basic-layout">
        <Header />
        <div id="main">
          <Menu>{Links}</Menu>
          <main>
            <Switch>{Routes}</Switch>
          </main>
        </div>
        <Footer {...this.props} />
      </div>
    )
  }
}

export default BasicLayout
