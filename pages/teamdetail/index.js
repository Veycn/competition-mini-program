// pages/teamdetail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {}
  },

  ontap(e){
    let flag = e.currentTarget.dataset.flag
    if(flag == 'no'){
      wx.showToast({
        title: "将忽略并删除此条邀请！",
        icon: 'none',
        duration: 2000
      })
      // setTimeout(() => {
      //   wx.switchTab({url: '/pages/aboutme/index'})
      // }, 2000)
      
    }else if(flag == 'yes'){
      let teamInfo = this.data.teamInfo
      console.log(teamInfo)
      let {name, leader, id} = teamInfo
      let userid = this.data.user.id, isLeader = false
      console.log(this.data.user)
      wx.request({
        url: "http://localhost:9009/team/addteammember",
        method: 'POST',
        data: {teamid: id, userid},
        success: res => {
          console.log(res)
          if(res.data.success){
            console.log(id, userid)
            this.addTeamIdtoMyInfo(userid, id, isLeader, name, leader)
          }
        }
      })  
    } else if(flag == 'holdon'){
      wx.switchTab({url: '/pages/aboutme/index'})
    }
  },
  _deleteMessage(msgId){
    wx.request({
      url: 'http://localhost:9009/msg/deletemsg',
      data: {msgId},
      success: res => {
        console.log(res)
      }
    })
  },
  addTeamIdtoMyInfo(userid, teamid, isLeader, name, leader){
    let {inviteId} = this.data
    wx.request({
      url: 'http://localhost:9009/user/addmyteam',
      method: "POST",
      data: {userid, teamid},
      success: res => {
        console.log(res)
        if(res.data.success){
          this._deleteMessage(inviteId)
          wx.showToast({
            title: "你已成功加入该队伍！",
            icon: 'none',
            duration: 2000
          })
          setTimeout(() => {
            wx.navigateTo({
              url: `/pages/myteam/index?isLeader=${isLeader}&leader=${leader}&userid=${userid}&teamname=${name}&teamid=${teamid}`
            })
          }, 2000)
        }else{
          wx.showToast({
            title: "加入失败！",
            icon: 'none',
            duration: 2000
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let teamid = this.options.teamid
    let inviteId = this.options.inviteId
    this.setData({
      teamid,
      inviteId
    })
    wx.getStorage({
      key: 'user',
      success: res => {
        this.setData({user: res.data})
      }
    })
    wx.request({
      url: 'http://localhost:9009/team/queryteambyid',
      data: {id: teamid},
      success: res => {
        console.log(res)
        let teamInfo = res.data && res.data.data[0]
        console.log(teamInfo)
        teamInfo.current = teamInfo.members ? teamInfo.members.split(',').length + 1 : 1     
        let leader = teamInfo.leader
        this.setData({
          teamInfo: teamInfo
        })
        this._getLeaderInfo(leader)
      }
    })
  },
  _getLeaderInfo(leader){
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