import React, {Component} from 'react';

class PlaylistInfo extends Component{

  render(){
    const id = this.props.history.location.search.split('=')[1];
    console.log(id);
    return (
      <div className="playlist-info">
        {id}
      </div>
    )
  }
}

export default PlaylistInfo;
