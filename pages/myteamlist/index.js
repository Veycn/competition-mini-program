// pages/myteamlist/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    user: '',
    isLeader: null
  },

  toTeam(e){
    let id = e.currentTarget.dataset.id
    let index = e.currentTarget.dataset.index
    let {list, user}= this.data
    let leader = list[index].leader
    let teamname = list[index].name
    let userid = user.id 
    let isLeader = leader == userid ? true : false
    //let { leader } = this.data.list[id]

    wx.navigateTo({url: `/pages/myteam/index?teamid=${id}&isLeader=${isLeader}&teamname=${teamname}&leader=${leader}&userid=${userid}`})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    
    wx.request({
      url: "http://localhost:9009/team/queryallmyteam",
      data: {id: 6},
      success: res => {
        console.log(res.data.data)
        this.setData({list: res.data.data})
        wx.setStorage({
          key: 'myTeams',
          data: res.data.data
        })
      }
    })
    wx.getStorage({
      key: 'user',
      success: res => {
        this.setData({user: res.data})
      }
    })
    wx.getStorage({
      key: 'myTeams',
      success: res => {
        this.setData({myTeams: res.data})
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