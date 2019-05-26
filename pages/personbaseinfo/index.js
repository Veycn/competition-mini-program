// pages/personbaseinfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let userid = options.userid
    this.setData({
      userid
    })
    wx.request({
      url: 'http://localhost:9009/user/getuserbaseinfo',
      data: { id: userid },
      success: res => {
        console.log(res.data.code)
        if (res.data.code == 1) {
          this.setData({
            userInfo: res.data.data
          })
        }
      }
    })
    wx.getStorage({
      key: "user",
      success: res => {
        console.log(res)
        this.setData({
          teamid: res.data.team,
          sender: res.data.name
        })
      }
    })
  },

  nextStep(e) {
    let flag = e.currentTarget.dataset.flag
    if (flag == 'no') {
      wx.switchTab({ url: '/pages/message/index' })
    } else if (flag == 'yes') {
      let { userid, teamid, sender } = this.data, flag = 4
      let reciver = this.data.userInfo.name
      console.log(userid, teamid, flag, sender, reciver)
      wx.request({
        url: 'http://localhost:9009/msg/sendinvitationtoperson',
        method: "POST",
        data: {
          userid, teamid, flag, sender, reciver
        },
        success: res => {
          console.log(res)
          if (res.data.success) {
            wx.showToast({
              title: '发送成功！',
              duration: 1000
            })
            wx.switchTab({ url: '/pages/message/index' })
          }
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})