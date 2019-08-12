import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/demo1">demo1</Link>
        <Link to="/demo2">demo2</Link>
      </div>
    );
  }
}

export default Home;
