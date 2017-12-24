import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import './DrawerItem.styl';

class DrawerItem extends Component {
  render() {
    const {route, isShow} = this.props;
    const {title, items} = route;
    return (
      <div className="draweritem">
        {
          title ? renderTitle(title, isShow) : null
        }
        <ul className='items'>
          {
            items.map((item) => {
              return (
                <li key={JSON.stringify(item)} className='item'>
                  <Link to={item.path}>
                    <i className={item.icon}/>
                    {item.text}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function renderTitle(title, isShow) {
  return (
    <h4 className={isShow?'':'hide'}>{title}</h4>
  )
}

export default withRouter(DrawerItem);
