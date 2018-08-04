import React, { Component } from 'react'
import { connect } from 'react-redux'
import SpecialList from './special-list/'
import GlobalList from './global-list/'
import Loading from '../../component/loading/'
import Subtitle from '../../component/subtitle/'
import { fetchToplist } from './store/actionCreators'
import './style.styl'

const renderTopicList = (data) => {
  if (!data) return null
  return (
    <div className="toplist">
      <Subtitle title="排行榜" />
      <SpecialList special={data.special} />
      <GlobalList global={data.global} />
    </div>
  )
}

@connect(
  state => ({ toplist: state.toplist }),
  {
    fetchToplist,
  },
)
export default class Toplist extends Component {
  componentDidMount() {
    const { data } = this.props.toplist
    if (!data) {
      this.props.fetchToplist()
    }
  }
  render() {
    const { data, isFetching } = this.props.toplist
    return <div>{isFetching ? <Loading /> : renderTopicList(data)}</div>
  }
}
