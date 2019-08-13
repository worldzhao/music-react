import axios, { AxiosRequestConfig } from 'axios';
import { Toast } from 'dora-ui';

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
    return response;
  },
  error => {
    Toast.info('接口异常，请稍后再试');
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

function request<T>(config: AxiosRequestConfig) {
  config = addTimestamp(config);
  return instance.request<T>(config).then(res => res.data);
}

export default request;
