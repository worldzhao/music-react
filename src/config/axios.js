import axios from 'axios'
import { push } from 'connected-react-router'
import store from '../store'

// 添加请求拦截器
axios.interceptors.request.use(
  (config) => {
    // 在发送请求之前做某事，比如说 设置loading动画显示
    console.log(`request config:${JSON.stringify(config)}`)
    return config
  },
  (error) => {
    // 请求错误时做些事
    console.log(`error:${error}`)
    return Promise.reject(error)
  },
)

// 添加响应拦截器
axios.interceptors.response.use(
  response =>
    // 对响应数据做些事，比如说把loading动画关掉
    response
  ,
  (error) => {
    // 请求错误时做些事
    const { status } = error.response
    if (status === 400) {
      console.log('抱歉，系统开小差了')
    }
    if (status === 403) {
      store.dispatch(push('/exception/403'))
    }
    if (status >= 404 && status < 422) {
      store.dispatch(push('/exception/404'))
    }
    if (status <= 504 && status >= 500) {
      console.log('服务器内部错误')
    }
    return Promise.reject(error)
  },
)

// 如果不想要这个拦截器也简单，可以删除拦截器
// const myInterceptor = axios.interceptors.request.use(() => {
/* ... */
// })
// axios.interceptors.request.eject(myInterceptor)
