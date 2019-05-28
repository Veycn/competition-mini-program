// pages/aboutme/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },



  showDetail (e) {
    let index = e.currentTarget.dataset.index
    let teamid = this.data.list[index].teamid
    let inviteId = this.data.list[index].id
    console.log(teamid)
    wx.navigateTo({url: `/pages/teamdetail/index?teamid=${teamid}&inviteId=${inviteId}`})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMyInvitation()
  },
  getMyInvitation(){
    wx.request({
      url: "http://localhost:9009/msg/getallmyinvitation",
      data: {id: 6, flag: 4},
      success: res => {
        console.log(res)
        this.setData({
          list: res.data.data
        })
      }
    })
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
    console.log('下拉刷新我的邀请～')
    this.getMyInvitation()
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