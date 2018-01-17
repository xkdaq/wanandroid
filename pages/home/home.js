// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://www.wanandroid.com/blogimgs/acc23063-1884-4925-bdf8-0b0364a7243e.png',
      'http://www.wanandroid.com/blogimgs/ffb61454-e0d2-46e7-bc9b-4f359061ae20.png',
      'http://www.wanandroid.com/blogimgs/ab17e8f9-6b79-450b-8079-0f2287eb6f0f.png',
      'http://www.wanandroid.com/blogimgs/fb0ea461-e00a-482b-814f-4faca5761427.png',
      'http://www.wanandroid.com/blogimgs/62c1bd68-b5f3-4a3c-a649-7ca8c7dfabe6.png',
      'http://www.wanandroid.com/blogimgs/ffb61454-e0d2-46e7-bc9b-4f359061ae20.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,

    listItem: [
    '../../image/home/img_08.jpg',
    '../../image/home/img_07.jpg', 
    '../../image/home/img_06.jpg', 
    '../../image/home/img_05.jpg', 
    '../../image/home/img_04.jpg',
    '../../image/home/img_03.jpg',
    '../../image/home/img_02.jpg', 
    '../../image/home/img_01.jpg']
  
  },

  click:function(){
    wx.navigateTo({
      url: '../knowledge/knowledge'
    })

  },





  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '../home/home'
    }
  }
})