// pages/teamdetail_s/index.js
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
    this.setData({params: {...options}})
    this._getTeamInfo(options.teamid)
  },

  // 获取队伍信息
  _getTeamInfo(teamid){
    wx.request({
      url: 'http://localhost:9009/team/queryteambyid',
      data: {id: teamid},
      success: res => {
        console.log(res)
        if(res.statusCode == 200){
          let teamInfo = res.data.data[0]
          let leader = teamInfo.leader
          teamInfo.current = teamInfo.members ? teamInfo.members.split(',').length + 1 : 1   
          this._getLeaderInfo(leader)
          this.setData({teamInfo})
        }
      }
    })
  },
  // 获取队长信息


  _getLeaderInfo(leader){
    wx.request({
      url: 'http://localhost:9009/user/getmyinfo',
      data: {id: leader},
      success: res => {
        this.setData({
          leaderInfo: res.data && res.data.data
        })
      }
    })
  },

  ontap(e){
    let tag = e.currentTarget.dataset.flag
    if(tag == 'yes'){
      wx.showToast({
        title: "发送成功！请耐心等候～",
        icon: "none",
        duration: 2000
      })
      setTimeout(() => {
        wx.switchTab({url: "/pages/message/index"})
      }, 2000)
    }else if(tag == 'no'){
      wx.switchTab({url: "/pages/message/index"})
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