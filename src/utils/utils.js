function isMobile () {
  if (navigator.userAgent.toLowerCase().match(/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) !== null) {
    return true
  } else return false
}

function isWeiXin () {
  let ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return true
  } else {
    return false
  }
}

export default {
  isMobile,
  isWeiXin
}
