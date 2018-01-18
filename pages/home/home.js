// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**
     * 轮播图
     */
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

    /**
     * 热门评测集合
     */
    listItem: [
    '../../image/home/img_05.jpg', 
    '../../image/home/img_04.jpg',
    '../../image/home/img_03.jpg',
    '../../image/home/img_02.jpg', 
    '../../image/home/img_01.jpg']
  
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