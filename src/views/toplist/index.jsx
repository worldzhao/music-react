import React, { Component } from 'react'
import { connect } from 'react-redux'
import SpecialList from './special-list/index'
import GlobalList from './global-list/index'
import Loading from '../../component/loading/index'
import Subtitle from '../../component/subtitle/index'
import { getToplist } from '../../redux/toplist.redux'
import './style.styl'

@connect(
  state => ({ toplist: state.toplist }),
  {
    getToplist,
  },
)
class Toplist extends Component {
  componentDidMount() {
    const { data } = this.props.toplist
    if (!Object.keys(data).length) {
      this.props.getToplist()
    }
  }
  render() {
    const { data } = this.props.toplist
    return (
      <div>
        {
          Object.keys(data).length ?
            <div className="toplist">
              <Subtitle title="排行榜" />
              <SpecialList special={data.special} />
              <GlobalList global={data.global} />
            </div> : <Loading />
        }
      </div>

    )
  }
}

export default Toplist

