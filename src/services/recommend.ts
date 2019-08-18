import { request } from '@/utils';
import { BannerResponse, NewestAlbumResponse } from '@/typings';

// 获取轮播图
export const getBanner = async () => {
  const res = await request<BannerResponse>({ url: '/api/banner' });
  // 发生非业务异常时res为null 非业务异常时直接reject了，不会执行到这 而是到业务代码的catch
  // 详情见`@/utils/request.ts`
  return res && res.banners;
};

// 获取最新专辑
export const getNewestAlbum = async () => {
  const res = await request<NewestAlbumResponse>({ url: '/api/album/newest' });
  return res && res.albums;
};
