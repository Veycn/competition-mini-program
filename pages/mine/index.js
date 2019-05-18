// pages/mine/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    list: [
      {icon: '/img/mine/myc.png', title: '我的比赛'},
      {icon: '/img/mine/team.png', title: '我的队伍'},
      {icon: '/img/mine/add.png', title: '寻找队友'},
      {icon: '/img/mine/want.png', title: '个人意向'},
      {icon: '/img/mine/want.png', title: '联系我们'},
      {icon: '/img/mine/want.png', title: '意见反馈'},
    ],
    user: {
      name: '杨小平',
      sex: 'male',
      num: 2016211624,
      grade: '2016',
      school: '重庆邮电大学',
      major: '智能科学与技术'
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})