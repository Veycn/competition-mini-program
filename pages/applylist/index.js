// pages/applylist/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isNoticeShow: true,
    applylist: []
  },

  closeNotice(e){
    console.log("close")
    this.setData({isNoticeShow: false})
  },
  agreeJoin(e){
    let index = e.currentTarget.dataset.index
    let {applylist, teamid} = this.data
    let userid = applylist[index].id
    let type = 1
    console.log("同意" + applylist[index].name + "加入队伍～", userid, teamid)
    
    wx.showToast({
      title: `同意${applylist[index].name}加入队伍～`,
      icon: "none",
      duration: 2000
    })
    // applylist.splice(index, 1)
    // this.setData({applylist})
  },
  ignoreThis(e){
    let index = e.currentTarget.dataset.index
    let {applylist} = this.data
    let remove = applylist[index]
    console.log("忽略" + applylist[index].name + "加入队伍的请求～")
    // 将此段代码放入移除请求成功的回掉函数中
    applylist.splice(index, 1)
    this.setData({applylist})
  },
  toRecruit(){
    wx.switchTab({url: "/pages/message/index"})
  },
  showInfo(e){
    let index = e.currentTarget.dataset.index
    let {applylist} = this.data
    let id = applylist[index].id
    console.log(id)
    wx.navigateTo({url: `/pages/memberinfo/index?memberid=${id}`})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let teamid = options.teamid
    this.setData({teamid})
    wx.request({
      url: 'http://localhost:9009/msg/getallmyteamapply',
      data: {teamid},
      success: res => {
        console.log(res)
        if(res.statusCode == 200){
          this.setData({applylist: res.data.data.data})
        }
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
    console.log("刷新申请列表信息")
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