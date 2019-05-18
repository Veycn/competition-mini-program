// pages/login/login/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    account: ''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  onblur(e){
    const target = e.currentTarget.dataset.label
    console.log(e)
    if(!e.detail.value){
      wx.showModal({
        title: '请输入账户名及密码～',
        duration: 1000,
        showCancel: false
      })
    }
    if(target == 'account'){
      let value = e.detail.value
      this.setData({account: value})
    }else if(target == 'pwd'){
      let value = e.detail.value
      this.setData({pwd: value})
    }
    // 请求接口， 查询数据库， 密码是否匹配
    
  },
  login(){
    console.log(123)
    wx.navigateTo({
      url: '/pages/info/index'
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