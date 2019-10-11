import axios, { AxiosRequestConfig } from 'axios';
import { Response } from '@/typings';
import { Toast } from 'dora-ui';

const codeMessage: { [key: string]: string } = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};

const instance = axios.create({
  timeout: 3000 // 超时时间
});

// 增加请求拦截器
instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 增加响应拦截器
instance.interceptors.response.use(
  response => {
    const { data } = response;
    // 存在业务异常 抛出给业务代码去捕获
    if (data.code !== 200) {
      return Promise.reject(data);
    }
    // 不存在业务异常返回数据
    return data;
  },
  error => {
    const { status } = error.response;
    console.warn(`http error: status-${status} message-${codeMessage[status]}`);
    Toast.info(codeMessage[status]);
    return Promise.reject(error);
  }
);

const addTimestamp = (config: AxiosRequestConfig) => {
  let { params } = config;
  if (Object.prototype.toString.call(params) === '[object Object]') {
    params['_'] = Date.now();
  } else {
    params = { _: Date.now() };
  }
  config.params = params;
  return config;
};

function request<T>(config: AxiosRequestConfig): Promise<Response<T>> | null {
  config = addTimestamp(config);
  return (instance.request<Response<T>>(config) as any) as Promise<Response<T>>;
}

export default request;
