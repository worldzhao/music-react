import { Spin } from '@/components';
import { Dispatch, RecommendState, RootState } from '@/typings';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import Slider from 'react-slick';
import { slickSettings } from './config';
import styles from './index.module.scss';
import { _ } from '@/utils';

const mapState = ({ recommend, loading }: RootState) => ({
  recommendState: recommend as RecommendState,
  modelLoading: loading.models.recommend
});

const mapDispatch = ({ recommend }: Dispatch) => ({
  getBanner: recommend.getBannerAsync
});

type Props = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch> &
  RouteComponentProps<{}> & {};

class Recommend extends PureComponent<Props> {
  componentDidMount() {
    this.props.getBanner();
  }

  // 渲染轮播图
  renderSlick() {
    const { banners } = this.props.recommendState;
    if (banners.length < 1) return null;
    return (
      <div className={styles['slick-container']}>
        <Slider {...slickSettings}>
          {banners.map(({ imageUrl, url }) => {
            const handler = () => {
              if (_.isString(url)) {
                window.location.href = url;
              }
            };
            return <img src={imageUrl} key={imageUrl} alt="banner" onClick={handler} />;
          })}
        </Slider>
      </div>
    );
  }

  render() {
    const { modelLoading } = this.props;
    return (
      <Spin fullScreen spinning={modelLoading} delay={500}>
        {this.renderSlick()}
      </Spin>
    );
  }
}

export default connect(
  mapState as any,
  mapDispatch as any
)(Recommend);
