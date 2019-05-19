// pages/myrace/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      { imgUrl: '/img/public/cup.png', title: '华为杯', startTime: '2019.05.11-12:00', endTime: '2019.05.11-12:00', types: '工程机械， 计算机， 编程', id: '1234534' },
      { imgUrl: '/img/public/cup.png', title: '未来杯', startTime: '2019.05.11-12:00', endTime: '2019.05.11-12:00', types: '工程机械， 计算机， 编程', id: '1234534' },
      { imgUrl: '/img/public/cup.png', title: '挑战杯', startTime: '2019.05.11-12:00', endTime: '2019.05.11-12:00', types: '工程机械， 计算机， 编程', id: '1234534' },
      { imgUrl: '/img/public/cup.png', title: '数模大赛', startTime: '2019.05.11-12:00', endTime: '2019.05.11-12:00', types: '工程机械， 计算机， 编程', id: '1234534' },
      { imgUrl: '/img/public/cup.png', title: 'ACM编程大赛', startTime: '2019.05.11-12:00', endTime: '2019.05.11-12:00', types: '工程机械， 计算机， 编程', id: '1234534' },
      { imgUrl: '/img/public/cup.png', title: 'ACM编程大赛', startTime: '2019.05.11-12:00', endTime: '2019.05.11-12:00', types: '工程机械， 计算机， 编程', id: '1234534' },
      { imgUrl: '/img/public/cup.png', title: 'ACM编程大赛', startTime: '2019.05.11-12:00', endTime: '2019.05.11-12:00', types: '工程机械， 计算机， 编程', id: '1234534' },
      { imgUrl: '/img/public/cup.png', title: 'ACM编程大赛', startTime: '2019.05.11-12:00', endTime: '2019.05.11-12:00', types: '工程机械， 计算机， 编程', id: '1234534' },
    ],
  },

  toRace() {
    wx.navigateTo({ url: `/pages/list/index` })
  },
  jumpDetail(e){
    let id = e.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({url:`/pages/mrdetail/index?raceid=${id}`})
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