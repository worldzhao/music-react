import React from 'react'
import { Link } from 'react-router-dom'
import './style.styl'

const GlobalList = (props) => {
  const { global } = props
  return (
    <div className="global">
      <h3 className="topic-title">全球榜</h3>
      <ul className="global-list">
        {global.map(topic => (
          <li key={topic.id}>
            <Link to={{ pathname: `/playlistinfo/${topic.id}` }}>
              <img
                src={topic.coverUrl}
                alt="playlist-cover"
                className="playlist-cover"
              />
              <span className="topic-name">{topic.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GlobalList
