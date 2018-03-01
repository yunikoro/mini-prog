// pages/databind/databind.js
Page({

  data: {
    name: 'zhangsan',
    arrayList: [],
    id: 213
  },

  changeTo: function() {
    
  },

  onLoad: function (options) {
  
  },

  onReady: function () {
    // setInterval(function() {
    //   console.log('push');
    //   console.log();
    //   var arrayList = this.data.arrayList;
    //   arrayList.push({id: 6});
    //   this.setData({
    //     arrayList: arrayList
    //   })
    // }.bind(this), 1000);
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
  
  },

  strUpdate: function(e) {
    this.setData({
      'id': e.detail.value
    })
  },

  gethow: function(e) {
    console.log(e);
    this.setData({
      'id': e.detail.what
    })
  }

})