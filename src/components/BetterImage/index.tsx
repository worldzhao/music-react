import React from 'react';

interface Props extends Partial<HTMLImageElement> {
  defaultImgSrc: string;
}

interface State {
  imageUrl?: string;
}

/**
 * 图片加载失败就显示默认图片
 */
class BetterImage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      imageUrl: props.src
    };
  }

  hasError: boolean = false;

  handleImageError = () => {
    // 初次触发 需要加载的图片挂了
    if (!this.hasError) {
      this.hasError = true;
      const { defaultImgSrc } = this.props;
      this.setState({
        imageUrl: defaultImgSrc
      });
    } else {
      // 第二次触发 默认图也挂了 所以默认图最好用小图转成base64放项目里
      // do sth
    }
  };

  render() {
    const { src, defaultImgSrc, ...restProps } = this.props;
    const { imageUrl } = this.state;
    const imgProps = {
      src: imageUrl,
      onError: this.handleImageError,
      ...restProps
    };
    return <img alt="" {...(imgProps as any)} />;
  }
}

export default BetterImage;
