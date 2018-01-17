// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  
  onShow() {
    this.getUserInfo();
  },

  /**
   * 通过微信获取个人信息
   */
  getUserInfo: function (cb) {
    var that = this
    wx.login({
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            that.setData({
              userInfo: res.userInfo
            });
          }
        })
      }
    })
  },



  /**
   * 分享
   */
  onShareAppMessage: function () {
    return {
      title: '玩Android是一个每日推荐Android优质文章的站点',
      path: '/pages/home/home'
    }
  }
})