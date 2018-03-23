/*eslint-disable */
import React, { Component } from "react";
import "./Dots.styl";

export default class Dots extends Component {
  state = {
    dotArr: []
  };

  componentDidMount() {
    const { dotsNum } = this.props;
    const dotArr = new Array(dotsNum + 1)
      .join()
      .split("")
      .map((v, i) => ({
        index: i + 1,
        status: false
      }));
    dotArr[0].status = true;
    this.setState({
      dotArr
    });
  }

  // dots跟随变化
  componentWillReceiveProps(nextProps) {
    const { dotArr } = this.state;
    const { index, dotsNum } = nextProps;
    if (index === 0) {
      dotArr.forEach(dot => {
        dot.status = false;
      });
      dotArr[dotArr.length - 1].status = true;
    } else if (index === dotsNum + 1) {
      dotArr.forEach(dot => {
        dot.status = false;
      });
      dotArr[0].status = true;
    } else {
      dotArr.forEach(dot => {
        dot.status = false;
        if (dot.index === index) {
          dot.status = true;
        }
      });
    }
    const dotArrCopy = dotArr.slice();
    this.setState({
      dotArr: dotArrCopy
    });
  }

  // 点击dots滚动
  slide = nextIndex => {
    const { dotsHandler } = this.props;
    dotsHandler(nextIndex);
  };

  render() {
    const { dotArr } = this.state;

    return (
      <div className="zzw-swiper-dots-box">
        {dotArr.map(v => (
          <div
            className={v.status ? "zzw-swiper-dot active" : "zzw-swiper-dot"}
            key={v.index}
            onClick={() => {
              this.slide(v.index);
            }}
          />
        ))}
      </div>
    );
  }
}
