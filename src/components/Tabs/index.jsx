import React, { Component } from 'react'
import './index.styl'

export default class Tabs extends Component {
  constructor(props) {
    super(props)
    const defaultActiveIndex = props.defaultActiveIndex || 0
    this.state = {
      current: defaultActiveIndex,
    }
  }

  setTabClass = index => (index === this.state.current ? 'tab active' : 'tab')

  setPanelClass = index => (index === this.state.current ? 'panel active' : 'panel')

  handleClick = (index) => {
    this.setState({ current: index })
  }

  render() {
    return (
      <div className="tabs">
        <ul className="tabs-head">
          {React.Children.map(this.props.children, (element, index) => (
            <li onClick={() => this.handleClick(index)} className={this.setTabClass(index)}>
              {element.props.tab}
            </li>
          ))}
        </ul>
        <div className="tabs-body">
          {React.Children.map(this.props.children, (element, index) => (
            <div className={this.setPanelClass(index)}>{element}</div>
          ))}
        </div>
      </div>
    )
  }
}

Tabs.TabPanel = props => <div tab={props.key}>{props.children}</div>
