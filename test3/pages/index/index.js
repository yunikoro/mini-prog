//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  dataBind: function() {
    wx.navigateTo({
      url: '../databind/databind',
    })
  },
  custcomp: function() {
    wx.navigateTo({
      url: '../cuscomp/cuscomp',
    })
  },
  clickDemo: function() {
    wx.navigateTo({
      url: '../button/button',
      success: function(res) {
        console.log(res);
        
      },
      fail: function(res) {

      },
      complete: function(res) {},
    })
  },
  onLoad: function () {

  }
})
