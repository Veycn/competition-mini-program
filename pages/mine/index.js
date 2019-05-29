// pages/mine/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    arr: [
      {icon: '/img/mine/mine.png', title: '我的信息', url: 'myinfo'},
      // {icon: '/img/mine/myc.png', title: '我的比赛', url: 'myrace'},
      {icon: '/img/mine/team.png', title: '我的队伍', url: 'myteamlist'},
      {icon: '/img/mine/add.png', title: '寻找队友', url: 'message'},
      {icon: '/img/mine/want.png', title: '联系我们', url: 'contact'},
      {icon: '/img/mine/fb.png', title: '意见反馈', url: 'feedback'},
    ],
    user: {}
  },

  jumpPage(e){
    let url = e.currentTarget.dataset.url
    if(url == 'message'){
      wx.switchTab({url: `/pages/${url}/index`})
      return
    }
    wx.navigateTo({url: `/pages/${url}/index`})
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this._getMyInfo()
    this._getAllMyTeam()
    this._getStorage()
  },

  _getMyInfo(){
    wx.request({
      url: 'http://localhost:9009/user/getmyinfo',
      data: {id: 6},
      success: res => {
        this.setData({
          user: res.data.data
        })
        wx.setStorage({
          key: 'user',
          data: res.data.data
        })
      }
    })
  },
  _getAllMyTeam(){
    wx.request({
      url: "http://localhost:9009/team/queryallmyteam",
      data: {id: 6},
      success: res => {
        this.setData({list: res.data.data})
        wx.setStorage({key: 'myTeams',data: res.data.data})
      }
    })
  },
  _getStorage(){
    wx.getStorage({
      key: 'user',
      success: res => {
        this.setData({user: res.data})
      }
    })
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