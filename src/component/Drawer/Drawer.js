import React, {Component} from 'react';
import DrawerItem from '../DrawerItem/DrawerItem'
import './Drawer.styl';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initMinHeight: 0,
      isShow: true
    };
  }

  componentDidMount() {
    if (this.drawer) {
      const innerHeight = window.innerHeight || document.documentElement.clientHeight;
      const initMinHeight = innerHeight - 90;
      this.setState({
        initMinHeight
      });
    }
  }

  toggleDrawer = () => {
    this.setState({
      isShow:!this.state.isShow
    });
  };

  render() {
    const {routeInfo} = this.props;
    const {initMinHeight, isShow} = this.state;
    return (
      <div className={'drawer ' + (isShow ? '' : 'hide')} style={{minHeight: initMinHeight}}
           ref={(node) => this.drawer = node}>
        <i className='icon-menu' onClick={this.toggleDrawer}/>
        {
          routeInfo.map((route) => <DrawerItem key={route} route={route} isShow={isShow}/>)
        }
      </div>
    )
  }
}

export default Drawer;
