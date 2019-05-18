// pages/login/account/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    account: '',
    pwd: '',
    pwd1: '',
    phone: '',
    isPass: false
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },
  
  nextStep() {
    // if(!this.data.isPass) return
    wx.navigateTo({
      url: '/pages/login/info/index'
    })
  },
  onblur(e) {
    const target = e.currentTarget.dataset.label
    if (target === 'account') {
      let value = e.detail.value
      this.setData({ account: value })
      const accountReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
      if(!accountReg.test(this.data.account)){
        wx.showModal({
          title: '邮箱格式不对哦～',
          duration: 1000,
          showCancel: false
        })
        return
      }
    } 
    if(target === 'phone'){
      let flag = false
      let value = e.detail.value
      this.setData({ phone: value })
      const phoneReg = /^1(3|4|5|7|8)\d{9}$/
      if(!phoneReg.test(this.data.phone)){
        wx.showModal({
          title: '电话号码格式不对哦～',
          duration: 1000,
          showCancel: false
        })
        return
      }
    }
    if(target === 'pwd'){
      let value = e.detail.value
      this.setData({ pwd: value })
    }
    if(target === 'pwd1'){
      let value = e.detail.value
      this.setData({ pwd1: value })
      var {pwd} = this.data
      if(pwd !== value){
        wx.showModal({
          title: '两次输入密码不一致哦～',
          duration: 1000,
          showCancel: false
        })
        return
      }
    }
    console.log("正则验证通过")
    this.setData({isPass: true})
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