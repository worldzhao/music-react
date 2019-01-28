import React from 'react'
import { Link } from 'react-router-dom'
import './style.styl'

export default function StarredBlock(props) {
  const { starredList } = props
  return (
    <div className="starred-block">
      <p className="starred-title">收藏的歌单</p>
      {starredList.length ? (
        <ul className="items">
          {starredList.map(item => (
            <li key={item.id} className="item">
              <Link to={{ pathname: `/playlist/${item.id}` }}>
                {item.name}
                <img src={item.coverImgUrl} alt="thunmb-img" />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-list-info">还没有收藏歌单哦~</p>
      )}
    </div>
  )
}
