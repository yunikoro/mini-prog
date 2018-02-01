// pages/button/button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  tapEleInfo: function(e) {
    console.log(e.currentTarget);
    console.log(e.touches);
  },
  getPhone: function(res) {
    console.log(res);
  },
  login: function(e) {
    wx.login({
      success: function(res) {
        console.log(res);
      }
    }) 
  },
  onLoad: function (options) {
  
  },

  onReady: function () {
  
  },

  onShow: function () {
  
  },

  onHide: function () {
  
  },

  onUnload: function () {
  
  },

  onPullDownRefresh: function () {
  
  },

  onReachBottom: function () {
  
  },

  onShareAppMessage: function () {
  
  }
})