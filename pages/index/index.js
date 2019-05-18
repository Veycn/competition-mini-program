// pages/index/index.js
Page({
  onLoad: function (options) {
    wx.showLoading({
      title: 'loading...',
    })

    // 从本地获取用户的登陆状态
    // let res = wx.getStorageSync('key')

    // 模拟
    let res = true
    // let res = false
    
    if(!res){
      wx.navigateTo({url: '/pages/login/index'})
    } else {
      wx.switchTab({url: '/pages/main/index'})
    }
  }
})