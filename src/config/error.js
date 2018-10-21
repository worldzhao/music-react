import { push } from 'connected-react-router'
import store from '@store'

export default function onError(error) {
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
}
