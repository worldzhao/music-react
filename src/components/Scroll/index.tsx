import BScroll from 'better-scroll';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.scss';

// 基于better-scroll封装Scroll组件 参考：https://juejin.im/post/5a3a6c12f265da4325297408#heading-3

interface Props {
  clickable: boolean;
  shouldRefresh: boolean;
  onScroll: (...args: any[]) => any;
}

class Scroll extends Component<Props> {
  static defaultProps = { clickable: true, shouldRefresh: false, onScroll: () => {} };

  scrollView: React.RefObject<any>; // eslint-disable-line
  scrollViewNode: ReturnType<typeof ReactDOM.findDOMNode> = null;
  bScroll: BScroll | null = null;

  constructor(props: Props) {
    super(props);
    this.scrollView = React.createRef();
  }

  componentDidMount() {
    this.scrollViewNode = ReactDOM.findDOMNode(this.scrollView.current);
    const { clickable, onScroll } = this.props;
    if (!this.bScroll) {
      this.bScroll = new BScroll(this.scrollViewNode as Element, {
        probeType: 3,
        click: clickable
      });
      if (onScroll) {
        this.bScroll.on('scroll', scroll => {
          onScroll(scroll);
        });
      }
    }
  }

  componentDidUpdate() {
    //组件更新后，如果实例化了better-scroll并且需要刷新就调用refresh()函数
    if (this.bScroll && this.props.shouldRefresh) {
      this.bScroll.refresh();
    }
  }

  componentWillUnmount() {
    if (this.bScroll && this.props.onScroll) {
      this.bScroll.off('scroll', this.props.onScroll);
      this.bScroll = null;
    }
  }

  refresh() {
    if (this.bScroll) {
      this.bScroll.refresh();
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div className={styles['scroll-view']} ref={this.scrollView}>
        {children}
      </div>
    );
  }
}

export default Scroll;
