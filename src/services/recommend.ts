import { request } from '@/utils';
import { BannerResponse } from '@/typings';
import { Toast } from 'dora-ui';

// get测试
export const getBanner = async () => {
  // 后端接口不确定性较大 此部分不做类型定义 有余力可加上
  const res = await request<BannerResponse>({ url: '/api/banner' });
  // 判断请求是否成功 根据业务后端决定 有时候也需要将业务异常直接抛到Component
  if (res.code === 200) {
    return res.banners;
  }
  Toast.info('banner接口异常');
  return [];
};
