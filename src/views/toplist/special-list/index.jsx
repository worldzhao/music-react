import React from 'react'
import { Link } from 'react-router-dom'
import './style.styl'

export default function SpecialList(props) {
  const { special } = props
  return (
    <div className="special">
      <h3 className="topic-title">官方榜</h3>
      <ul className="special-list">
        {
        special.map(topic => (
          <li className="topic-block" key={topic.id}>
            <Link to={{ pathname: '/playlistinfo', search: `?id=${topic.id}` }}>
              <img src={topic.coverUrl} alt="playlist-cover" className="playlist-cover" />
            </Link>
            <ul className="top3">
              {
                topic.songs.map((s, i) => (
                  <li key={s.id} className="top3-item">
                    <span className="s-no">{i + 1}.</span>
                    <span className="s-name">{s.name} - </span>
                    <span className="artists">
                      {
                      s.ar.map(artist =>
                        (
                          <Link
                            key={Math.random() + artist.id}
                            to={{ pathname: '/artistinfo', search: `?id=${artist.id}` }}
                          > {artist.name}
                          </Link>
                         ))
                    }
                    </span>
                  </li>
                ))
              }
            </ul>
          </li>
        ))
      }
      </ul>
    </div>
  )
}
