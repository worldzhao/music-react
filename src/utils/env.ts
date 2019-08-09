const { REACT_APP_ENV } = process.env;

const isSupportWebp =
  !![].map &&
  document
    .createElement('canvas')
    .toDataURL('image/webp')
    .indexOf('data:image/webp') === 0;

const ua = navigator.userAgent.toLowerCase();

export default {
  isDev: REACT_APP_ENV === 'dev',
  isProd: REACT_APP_ENV === 'prod',
  isAndroid: /linux|android/.test(ua),
  isSafari: /safari/.test(ua) && !/chrome/.test(ua),
  isIos: !!ua.match(/\(i[^;]+;( u;)? cpu.+mac os x/),
  isWeiXin: /micromessenger/.test(ua),
  isMobile: /mobile/.test(ua),
  isWeiXinDebug: /wxdebug/.test(window.location.href),
  isSupportWebp
};
