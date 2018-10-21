import React, { Component, Fragment } from 'react'
import Loading from '../Loading'

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
        <Loading loading={loading}>
          <img src={imgUrl} alt={altText} onLoad={this.handleImageLoaded} style={{ display }} />
        </Loading>
      </Fragment>
    )
  }
}
