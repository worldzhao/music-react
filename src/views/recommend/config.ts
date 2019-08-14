import Slider, { Settings } from 'react-slick';
import styles from './index.module.scss';

const speed = 500; // 轮播切换速度
const autoplaySpeed = 3000; // 轮播速度
export const slickSettings = (instance: Slider) => {
  const settings = {
    dots: true,
    dotsClass: styles['slick-dots'],
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: speed,
    autoplaySpeed: autoplaySpeed,
    cssEase: 'linear',
    swipe: true,
    lazyLoad: (true as any) as Settings['lazyLoad'],
    onSwipe() {
      instance.slickPause();
      setTimeout(() => {
        instance.slickPlay();
      }, autoplaySpeed);
    }
  };

  return settings;
};
