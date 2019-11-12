import config from './config'

import { getToken } from './auth'

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
