// pages/detail/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    raceInfo: {},
    isShow: false,
    teamname: '',
    number: null
  },
  download(e){

  },
  addItem(e){
    let flag = e.currentTarget.dataset.flag
    if(flag == 'create'){
      this.setData({isShow: true})
    } else if(flag == 'search'){
      wx.switchTab({url: '/pages/message/index'})
    }
  },
  toastClose(){
    this.setData({isShow: false})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let id = options.raceid
    this.setData({
      receId: id
    })
    wx.request({
      url: `http://localhost:9009/race/getraceinfobyid?id=${id}`,
      success: res => {
        this.setData({
          raceInfo: res.data && res.data.data[0]
        })
      }
    })
    wx.getStorage({
      key: 'user',
      success: res => {
        console.log(res)
        this.setData({
          userid: res.data.id
        })
      }
    })
  },

  teamnameInput(e){this.setData({teamname: e.detail.value})},
  numberInput(e){this.setData({number: e.detail.value})},
  createTeam(){
    let { teamname, number, userid} = this.data
    let competition = this.data.raceInfo.name
    wx.request({
      url: 'http://localhost:9009/team/createteam',
      method: 'POST',
      data: {name: teamname, number, leader: userid, competition},
      success: res => {
        if(res.data.success){
          let teaminfo = res.data.data
          let {id, name, leader} = teaminfo
          wx.showToast({
            title: '队伍创建成功！',
            icon: 'none',
            duration: 2000
          })
          this._getAllMyTeam()
          console.log(teaminfo)
          setTimeout(() => {
            this.toastClose()
            wx.navigateTo({
              url: `/pages/myteam/index?teamid=${id}&leader=${leader}&teamname=${name}&isLeader=${true}&userid=${userid}`
            })
          }, 2000)
        }else{
          let teaminfo = res.data.data
          let {id, name, leader} = teaminfo
          wx.showToast({
            title: '你已经创建该比赛的队伍！',
            icon: 'none',
            duration: 2000
          })
          console.log(teaminfo)
          setTimeout(() => {
            this.toastClose()
            wx.navigateTo({
              url: `/pages/myteam/index?teamid=${id}&leader=${leader}&teamname=${name}&isLeader=${true}&userid=${userid}`
            })
          }, 2000)
        }
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