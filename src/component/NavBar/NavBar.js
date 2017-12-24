import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './NavBar.styl';
class NavBar extends Component {
  render() {
    const title = this.props.title?this.props.title:'SoulBeats';
    return (
      <div className="navbar">
        <div className="left">
          <i className="icon-arrow-left" onClick={() => {
            this.props.history.goBack()
          }}/>
          <h2 className="title">{title}</h2>
        </div>
        <div className="right">
          <i className="icon-cross"/>
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar);
