var First = require('../../services/first.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showModal({
      title: '结果',
      content: options.q,
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      var first = new First();

      wx.login({
        success: function(res) {
          console.log(res);
        }
      })

      wx.authorize({
        scope: 'scope.userInfo',
        success: function(res) {
          console.log(res);
          wx.getUserInfo({
            success: function(res) {
              console.log(res);
            }
          })
        }
      })

      wx.getSetting({
        success: function(res) {
          console.log(res);
        },
        fail: function(res) {
          console.log(res);
        },
        complete: function(res) {
          console.log(res);
        }
      })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    console.log(res);
    return {
      title: '我的转发标题',
      path: '/pages/testcomp/testcomp',
      imageUrl: 'https://www.baidu.com',
      success: function(res) {
        console.log('success', res);
      },
      fail: function(res) {
        console.log('fail', res);
      }
    }
  },

  imgUpload: function() {
    wx.chooseImage({
      success: function(res) {
        console.log(res);
      },
    })
  }

})