import React, { Component, Fragment } from 'react'
import Spin from '../Spin'

export default class LoadableImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  handleImageLoaded = () => {
    this.setState({
      loading: false,
    })
  }

  render() {
    const { loading } = this.state
    const { imgUrl, altText } = this.props
    const display = loading ? 'none' : 'block'
    return (
      <Fragment>
        <Spin spinning={loading}>
          <img src={imgUrl} alt={altText} onLoad={this.handleImageLoaded} style={{ display }} />
        </Spin>
      </Fragment>
    )
  }
}
