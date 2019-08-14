import albumDefaultImg from '@/common/images/album-default-cover.png';
import { BetterImage, Scroll, Spin } from '@/components';
import { Dispatch, RecommendState, RootState } from '@/typings';
import { _ } from '@/utils';
import dayjs from 'dayjs';
import React, { PureComponent } from 'react';
import LazyLoad, { forceCheck } from 'react-lazyload';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { slickSettings } from './config';
import styles from './index.module.scss';

const mapState = ({ recommend, loading }: RootState) => ({
  recommendState: recommend as RecommendState,
  modelLoading: loading.models.recommend
});

const mapDispatch = ({ recommend }: Dispatch) => ({
  getBanner: recommend.getBannerAsync,
  getNewestAlbum: recommend.getNewestAlbumAsync
});

type Props = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch> &
  RouteComponentProps<{}> & {};

class Recommend extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.sliderInstance = React.createRef();
  }

  componentDidMount() {
    const { getBanner, getNewestAlbum } = this.props;
    getBanner();
    getNewestAlbum();
  }

  sliderInstance: React.RefObject<Slider>;

  // 渲染轮播图
  renderSlick() {
    const { banners } = this.props.recommendState;
    if (banners.length < 1) return null;
    return (
      <div className={styles['slick-container']}>
        <Slider ref={this.sliderInstance} {...slickSettings(this.sliderInstance.current as Slider)}>
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

  // 渲染最新专辑
  renderNewestAlbums() {
    const { newestAlbums } = this.props.recommendState;
    return (
      <ul className={styles['newest-albums']}>
        {newestAlbums.map(album => {
          const {
            name: albumName,
            picUrl,
            id,
            artist: { name: artistName }
          } = album;
          return (
            <li key={id} className={styles['album']}>
              <LazyLoad overflow once offset={100}>
                <BetterImage
                  defaultImgSrc={albumDefaultImg}
                  src={`${picUrl}?param=60y60`}
                  alt="album-cover"
                />
              </LazyLoad>
              <div className={styles['album-info']}>
                <p className={styles['album-name']}>{albumName}</p>
                <p className={styles['artist-name']}>{artistName}</p>
              </div>
              <span className={styles['date']}>{dayjs(Date.now()).format('MM-DD')}</span>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    const { modelLoading } = this.props;
    return (
      <Scroll shouldRefresh={!modelLoading} onScroll={forceCheck}>
        <Spin fullScreen spinning={modelLoading} delay={500}>
          {this.renderSlick()}
          <h2 className={styles['title']}>最新专辑</h2>
          {this.renderNewestAlbums()}
        </Spin>
      </Scroll>
    );
  }
}

export default connect(
  mapState as any,
  mapDispatch as any
)(Recommend);
