import config from './config'

import { getToken } from './auth'

import { Dialog } from 'vant'

import router from '../router'

const axios = require('axios')

export default {
  request: (option) => {
    let {
      url,
      data,
      method,
      headers,
      success
    } = option
    headers = headers || {}
    headers['X-Token'] = getToken()
    axios({
      method: method || 'POST',
      url: config.BASE_URL + url,
      data,
      headers
    })
      .then(res => {
        let data = res.data
        if (data.code === config.ERR_AUTH_CODE) {
          Dialog.confirm({
            title: '提示',
            message: '请先登录后再操作~'
          })
            .then(() => {
              router.push({
                url: '/publics/login'
              })
            })
          return
        }
        success(data)
      })
      .catch(res => {
        throw res
      })
  },
  upload: () => {
    axios({
      url: config.UPLOAD_URL
    })
  }
}
