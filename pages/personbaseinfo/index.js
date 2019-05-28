// pages/personbaseinfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isToastShow: false,
    sender: '',
    reciver: '',
    pickIndex: 0
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
    wx.getStorage({
      key: "myTeams",
      success: res => {
        console.log(res)
        let myTeams = res.data
        let pickArr = []
        myTeams.forEach(item => {
          pickArr.push(item.name)
        })
        this.setData({
          myTeams, pickArr
        })
      }
    })
  },

  nextStep(e) {
    let flag = e.currentTarget.dataset.flag
    if (flag == 'no') {
      wx.switchTab({ url: '/pages/message/index' })
    } else if (flag == 'yes') {
      this.setData({isToastShow: true})
      let { userid, teamid, sender } = this.data, flag = 4
      let reciver = this.data.userInfo.name
      // console.log(userid, teamid, flag, sender, reciver)
      let arr = teamid.split(',')
      this.setData({teamidArr: arr})
      
    }
  },
  send(){
    let {pickArr, pickIndex, teamidArr} = this.data
    let reciver = this.data.userInfo.name
    let userid = this.data.userInfo.id
    let sender = this.data.sender
    let flag = 4 // 邀请的 flag 固定为 4
    console.log(pickArr[pickIndex])
    let teamid = teamidArr[pickIndex]
    console.log("teamid = "+teamid, reciver, sender, userid)
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
            title: '你的邀请已成功发送！',
            icon: 'none',
            duration: 2000
          })
          setTimeout(() => {
            wx.switchTab({ url: '/pages/message/index' })
          }, 2000)
        }
      }
    })
  },
  toastClose() { this.setData({ isToastShow: false }) },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      pickIndex: e.detail.value
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