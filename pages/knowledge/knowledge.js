// pages/knowledge/knowledge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listItem: ['开发环境', '基础知识', '四大组件', '常用控件', '自定义控件', '用户交互', '网络访问', '图片加载', '数据存储', '动画效果', '四大组件', '基础知识', '四大组件', '基础知识', '四大组件'],

    listContain: ['Android相关', 'gradle', '官方发布', '字符编码', 'popupwindow', 'activity', 'service', 'context', '三级缓存', '内存管理', 'toast', 'dialog', 'handle','基础布局','基础ui空间']
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