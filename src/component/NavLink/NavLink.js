import React, {Component} from 'react';
import {withRouter,Link} from 'react-router-dom';
import './NavLink.styl'
class NavLink extends Component{
  render(){
    const {navlist} = this.props;
    return(
      <div className="navlink">
        <ul className='items'>
          {
            navlist.map(v=>{
              return <li key={v.path} className='item'><Link to={v.path}>{v.text}</Link></li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(NavLink);
