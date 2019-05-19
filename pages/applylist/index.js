// pages/applylist/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isNoticeShow: true,
    applylist: [
      {avatar: '/img/avatar.jpg', tname: '我来当分母', name: '杨小平', major: '智能科学与技术', grade: '2016', id:'123748'},
      {avatar: '/img/avatar.jpg', tname: '我来当分母', name: '杨玄烛', major: '计算机科学与技术', grade: '2016', id:'123748'},
      {avatar: '/img/avatar.jpg', tname: '我来当分母', name: '刘凯', major: '软件工程', grade: '2016', id:'123748'},
      {avatar: '/img/avatar.jpg', tname: '我来当分母', name: '冉凯', major: '信息安全', grade: '2016', id:'123748'},
    ]
  },

  closeNotice(e){
    console.log("close")
    this.setData({isNoticeShow: false})
  },
  agreeJoin(e){
    let index = e.currentTarget.dataset.index
    let {applylist} = this.data
    console.log("同意" + applylist[index].name + "加入队伍～")
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