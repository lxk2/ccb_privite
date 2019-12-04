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

function fmtNumber2k (number) {
  let isNumber = typeof number === 'number' && !isNaN(number)
  if (!isNumber) return 0
  if (number > 1000) {
    return ((Math.floor(number * 100) / 100) / 100) + 'k'
  }
  return Math.floor(number * 100) / 100
}

export default {
  isMobile,
  isWeiXin,
  fmtNumber2k
}
