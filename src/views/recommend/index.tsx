import albumDefaultImg from '@/common/images/album-default-cover.png';
import { BetterImage, Scroll, Spin } from '@/components';
import { Dispatch, RecommendState, RootState } from '@/typings';
import { _ } from '@/utils';
import dayjs from 'dayjs';
import React, { FC, memo, useEffect, useRef } from 'react';
import LazyLoad, { forceCheck } from 'react-lazyload';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import Slick from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { slickSettings } from './config';
import styles from './index.module.scss';

interface NewestAlbumsProps {
  newestAlbums: RecommendState['newestAlbums'];
}

const NewestAlbums: FC<NewestAlbumsProps> = memo(({ newestAlbums }) => {
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
});

interface SliderProps {
  banners: RecommendState['banners'];
}

const Slider: FC<SliderProps> = memo(({ banners }: SliderProps) => {
  if (banners.length < 1) return null;
  let timer: any = undefined;

  useEffect(() => {
    return () => {
      clearTimeout(timer);
    };
  }, [timer]);

  const slickRef = useRef<Slick>(null);

  const handleSlickSwipe = () => {
    if (slickRef.current) {
      const { current: Slick } = slickRef;
      clearTimeout(timer);
      Slick.slickPause();
      timer = setTimeout(() => {
        Slick.slickPlay();
        clearTimeout(timer);
      }, slickSettings.autoplaySpeed);
    }
  };

  const handleBannerClick = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const url = event.currentTarget.dataset['url'];
    if (_.isString(url)) {
      window.location.href = url;
    }
  };

  return (
    <div className={styles['slick-container']}>
      <Slick {...slickSettings} ref={slickRef} onSwipe={handleSlickSwipe}>
        {banners.map(({ imageUrl, url }) => {
          return (
            <img
              src={imageUrl}
              key={imageUrl}
              alt="banner"
              onClick={handleBannerClick}
              data-url={url}
            />
          );
        })}
      </Slick>
    </div>
  );
});

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

const Recommend: FC<Props> = props => {
  const { getBanner, getNewestAlbum, modelLoading, recommendState } = props;

  useEffect(() => {
    getBanner();
    getNewestAlbum();
  }, [getBanner, getNewestAlbum]);

  const { newestAlbums, banners } = recommendState;

  return (
    <Scroll shouldRefresh={!modelLoading} onScroll={forceCheck}>
      <Spin fullScreen spinning={modelLoading} delay={500}>
        <div className={styles['recommend']}>
          <Slider banners={banners} />
          <h2 className={styles['title']}>最新专辑</h2>
          <NewestAlbums newestAlbums={newestAlbums} />
        </div>
      </Spin>
    </Scroll>
  );
};

export default connect(
  mapState as any,
  mapDispatch as any
)(Recommend);
