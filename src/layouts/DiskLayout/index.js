import React, { Component } from 'react'
import { Switch } from 'react-router-dom'
import { Routes } from '@router'

export default class DiskLayout extends Component {
  state = {}
  render() {
    return <Switch>{Routes}</Switch>
  }
}
