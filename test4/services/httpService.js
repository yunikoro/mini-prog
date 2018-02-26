
const baseUrl = "https://ahuangale.top";

var httpService = function(url, data, method, preRequest, success, fail, complete) {
  if(typeof preRequest == 'function') {
    preRequest();
  }
  wx.request({
    url: url,
    data: data,
    method: method,
    success: success,
    fail: fail
  })
}

httpService.__proto__.baseUrl = baseUrl;

module.exports = httpService;