import React, { Component } from 'react'

const styleClassMap = {
  info: 'alert-style-info',
  danger: 'alert-style-danger',
  warning: 'alert-style-warning',
  error: 'alert-style-danger',
}

const sizeClassmap = {
  normal: 'alert-size-normal',
  large: 'alert-size-large',
}
export default class Alert extends Component {
  static defaultProps = {
    type: 'info',
    size: 'normal',
    rounded: true,
    closable: true,
    onClose() {},
    prefix: 'zzw',
  };

  state = {
    closed: false,
  };

  close = () => {
    const { onClose } = this.props
    this.setState(
      {
        closed: true,
      },
      () => {
        onClose()
      },
    )
  };

  render() {
    const { closed } = this.state
    if (closed) {
      return null
    }
    const {
      type, size, rounded, closable, prefix, children,
    } = this.props
    // 类名这一系列 判断 连接 操作可以使用 classnames 这个库
    const typeClass = `${prefix}-${styleClassMap[type]}`
    const sizeClass = `${prefix}-${sizeClassmap[size]}`
    let roundedClass = ''
    if (rounded) {
      roundedClass = `${prefix}-alert-border-rounded`
    }
    return (
      <div className={`${typeClass} ${sizeClass} ${roundedClass}`}>
        {children}
        {closable && <span onClick={this.close}>x</span>}
      </div>
    )
  }
}
