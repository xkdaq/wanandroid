// pages/knowledge/knowledge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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