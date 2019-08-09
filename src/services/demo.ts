import { request } from '@/utils';
import { GetUserParams, GetUserResponse, PostUserParams, PostUserResponse } from '@/typings';

// get测试
export const getUser = async (params: GetUserParams) => {
  // 后端接口不确定性较大 此部分不做类型定义 有余力可加上
  const res = await request<GetUserResponse>({ url: '/api/user', params });
  // 判断请求是否成功 根据业务后端决定 有时候也需要将业务异常直接抛到Component
  if (res.code === 0) {
    return res.data;
  }
  return null;
};

// post测试

export const postUser = async (data: PostUserParams) => {
  const res = await request<PostUserResponse>({ url: '/api/login/account', method: 'post', data });
  // 判断请求是否成功 根据业务后端决定
  if (res.code === 0) {
    return res.data;
  }
  return null;
};
