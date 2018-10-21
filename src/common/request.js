import axios from 'axios'
import { message } from 'antd'

export default {
  get(url, params = {}) {
    if (!url) throw new Error('url is requried!')
    return axios
      .get(url, {
        params,
      })
      .then((res) => {
        if (res.data) {
          return res.data
        }
        return message.error('请求出了一点问题')
      })
      .catch(error => console.log(error))
  },
}
