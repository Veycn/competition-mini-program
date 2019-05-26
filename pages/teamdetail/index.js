// pages/teamdetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  ontap(e){
    let flag = e.currentTarget.dataset.flag
    if(flag == 'no'){
      wx.switchTab({url: '/pages/aboutme/index'})
    }else if(flag == 'yes'){
      wx.navigateTo({url: '/pages/myteam/index'})
    } else if(flag == 'holdon'){
      wx.switchTab({url: '/pages/aboutme/index'})
    }
  },
  _deleteMessage(){
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let teamid = this.options.teamid
    this.setData({
      teamid: teamid
    })
    wx.request({
      url: 'http://localhost:9009/team/queryteambyid',
      data: {id: teamid},
      success: res => {
        console.log(res)
        let teamInfo = res.data && res.data.data[0]
        console.log(teamInfo)
        teamInfo.current = teamInfo.members.split(',').length + 1
        let leader = teamInfo.leader
        this.setData({
          teamInfo: teamInfo
        })
        wx.request({
          url: 'http://localhost:9009/user/getmyinfo',
          data: {id: leader},
          success: res => {
            console.log(res)
            this.setData({
              leaderInfo: res.data && res.data.data
            })
          }
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