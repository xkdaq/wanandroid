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
   * 热门
   */
  hotClick:function(){
    this.showToase();
  },

  /**
   * 我的收藏
   */
  likeClick:function(){
    this.showToase();
  },

  /**
   * 关于我们
   */
  aboutUsClick:function(){
    wx.navigateTo({
      url: '/pages/aboutus/aboutus',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
   * showToase
   */
  showToase:function(){
    wx.showToast({
      title: '正在开发中',
      icon: 'success',
      duration: 2000
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