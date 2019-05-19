// pages/list/index.js

// import { jumpPage } from '../../utils'
Page({

  /**
   * Page initial data
   */
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      wx.request({
        url: "localhost:9009/test",
        
        success(res){
          console.log(res)
        }
      })
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  
  data: {
    levels: ['校级', '省级', '国家级', '国际'],
    types: ['理工', '文体', '商业', '数模', '程序设计', '大数据', '工程机械', '电子&自动化', '环境能源', '船舶海洋'],
    active1: 0,
    active: 0,
    list: [
      { imgUrl: '/img/public/cup.png', title: '华为杯', startTime: '2019.05.11-12:00', endTime: '2019.05.11-12:00', types: '工程机械， 计算机， 编程' },
      { imgUrl: '/img/public/cup.png', title: '未来杯', startTime: '2019.05.11-12:00', endTime: '2019.05.11-12:00', types: '工程机械， 计算机， 编程' },
      { imgUrl: '/img/public/cup.png', title: '挑战杯', startTime: '2019.05.11-12:00', endTime: '2019.05.11-12:00', types: '工程机械， 计算机， 编程' },
      { imgUrl: '/img/public/cup.png', title: '数模大赛', startTime: '2019.05.11-12:00', endTime: '2019.05.11-12:00', types: '工程机械， 计算机， 编程' },
      { imgUrl: '/img/public/cup.png', title: 'ACM编程大赛', startTime: '2019.05.11-12:00', endTime: '2019.05.11-12:00', types: '工程机械， 计算机， 编程' },
    ],
  },



  changeClass(e){
    let index = e.currentTarget.dataset.index
    let tag = e.currentTarget.dataset.tag
    if(tag == 'level'){
      this.setData({active1: index})
    }else if(tag == 'type'){
      this.setData({active: index})
    }
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.request({
      url: "http://localhost:9009/test",
      success(res){
        console.log(res)
      }
    })
  },

  jumpPage(e){
    let url = e.currentTarget.dataset.url
    wx.navigateTo({url: `/pages/${url}/index`})
  },
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {
    console.log(111)
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})