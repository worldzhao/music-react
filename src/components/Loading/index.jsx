import React from 'react'
import ReactLoading from 'react-loading'
import './index.styl'

function Loading(props) {
  const { type = 'bars', color = '#bc2f2e', loading = true } = props
  return (
    <div className="loading">
      {loading ? <ReactLoading type={type} color={color} height="10%" width="10%" /> : null}
    </div>
  )
}
export default Loading
