import React, {Component} from 'react';
import InfoHeader from '../../component/InfoHeader/InfoHeader';
import SongList from '../../component/SongList/SongList';
import Loading from '../../component/Loading/Loading'
import axios from 'axios';
import {getPlaylistInfotUrl} from '../../axios/api'

class PlaylistInfo extends Component {
  constructor(props) {
    super(props);
    this.state={
      playlist: null
    }
  }

  componentDidMount() {
    const id = this.props.history.location.search.split('=')[1];
    axios.get(getPlaylistInfotUrl(id)).then(res => {
      console.log(res);
      this.setState({
        playlist: res.data.playlist
      });
    }).catch(error => {
      console.log(error);
    })
  }

  render() {
    const {playlist} = this.state;
    return (
      <div>
        {
          playlist?renderPlaylist(playlist):<Loading/>
        }
      </div>
    )
  }
}
function renderPlaylist(playlist){
  const {tracks} = playlist;
  return (
    <div className="playlist-info">
      <InfoHeader playlist={playlist}/>
      <SongList tracks={tracks}/>
    </div>
  )
}
export default PlaylistInfo;
