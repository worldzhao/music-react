import React from 'react'

import './style.styl'

const ArHeader = (props) => {
  console.log('====================================')
  console.log('render arheader')
  console.log('====================================')
  const {
    img1v1Url,
    name,
    musicSize,
    albumSize,
    mvSize,
    briefDesc,
  } = props.artist
  return (
    <div className="ar-header">
      <div className="avatar">
        <img src={img1v1Url} alt="artist-avatar" />
      </div>

      <div className="num">
        <span className="name">{name}</span>
        <span>
          <i className="icon-music" />歌曲数:{musicSize}
        </span>
        <span>
          <i className="icon-shocked" />专辑数:{albumSize}
        </span>
        <span>
          <i className="icon-film" />MV数:{mvSize}
        </span>
      </div>

      <div className="desc">
        <p>{briefDesc}</p>
      </div>
    </div>
  )
}

export default ArHeader
