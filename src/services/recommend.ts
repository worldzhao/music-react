import { request } from '@/utils';
import { BannerResponse, NewestAlbumResponse } from '@/typings';
import { Toast } from 'dora-ui';

// 获取轮播图
export const getBanner = async () => {
  const res = await request<BannerResponse>({ url: '/api/banner' });
  // 判断请求是否成功 根据业务后端决定 有时候也需要将业务异常直接抛到Component
  if (res && res.code === 200) {
    return res.banners;
  }
  Toast.info('banner接口异常');
  return [];
};

// 获取最新专辑
export const getNewestAlbum = async () => {
  const res = await request<NewestAlbumResponse>({ url: '/api/album/newest' });
  if (res && res.code === 200) {
    return res.albums;
  }
  Toast.info('newest-album接口异常');
  return [];
};
