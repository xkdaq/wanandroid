// pages/knowledge/knowledge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listItem: []
  },

  onLoad:function(options){
    var that = this;
    wx.showToast({
      title: '正在加载',
      icon:'loading',
    })
     
    wx.request({
      url: 'http://www.wanandroid.com/tree/json',
      method: 'GET',
      success: function (res) {
        console.log(res.data);
        console.log(res.data.errorCode);
        that.setData({
          listItem: res.data.data
        })
      },
      fail:function(){
        console.log('-------fail-------');
      },
      complete:function(){
        wx.hideToast();
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