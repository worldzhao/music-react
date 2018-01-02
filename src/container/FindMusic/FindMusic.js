import React, {Component} from 'react';
import {Route,Redirect} from 'react-router-dom';
import Subtitle from '../../component/Subtitle/Subtitle';
import NavLink from '../../component/NavLink/NavLink';
import SongCardPage from '../../component/SongCardPage/SongCardPage';
import './FindMusic.styl';
function SpecialRec() {
  return (
    <h1>person</h1>
  )
}


class FindMusic extends Component {
  render() {
    const {match} = this.props;
    const pathname = this.props.location.pathname;
    const navlist = [
      {
        path: `${match.url}/specialrec`,
        text: '个性推荐',
        component: SpecialRec
      },
      {
        path: `${match.url}/playlist`,
        text: '歌单',
        component: SongCardPage
      }];
    return (
      <div className="findMusic">
      {pathname==="/findmusic"?<Redirect to="/findmusic/playlist"></Redirect>:null}
        <Subtitle title={'发现音乐'}/>
        <NavLink navlist={navlist}/>
        <div className="level2-views">
          {
            navlist.map((v) => (
              <Route key={v.path} path={v.path} component={v.component}/>
            ))
          }
        </div>
      </div>
    )
  }
}


export default FindMusic;
