// pages/myteam/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isCaptain: true,
    id: '78905756',
    teamer: [
      { name: '杨小平', phone: '17784450729', qq: '1594325241', avatar: '/img/avatar.jpg', id: '12345678' },
      { name: '杨玄烛', phone: '15632839231', qq: '63378239', avatar: '/img/avatar.jpeg', id: '45678658' },
      { name: '刘凯', phone: '17399038231', qq: '789423894', avatar: '/img/avatar.jpg', id: '78905756' },
      { name: '冉凯', phone: '18878369823', qq: '239894042', avatar: '/img/avatar.jpeg', id: '56453456' },
    ]
  },

  // 让队长显示在第一个
  _formatData(){
    const {teamer, isCaptain, id} = this.data
    let temp = null
    if(isCaptain){
      teamer.forEach((item, index) => {
        if(item.id == id){
          temp = teamer.splice(index, 1)
        }
      })
      teamer.unshift(temp[0])
      this.setData({teamer})
    }
  },

  // 去发布招募信息
  toRecruit(e){
    wx.switchTab({
      url: '/pages/message/index'
    })
  },

  // 查看申请加入队伍的列表
  applyList(e){
    wx.navigateTo({url: '/pages/applylist/index'})
  },
  // 点击了队员list右边的按钮， 应该是想进行某些操作
  doSomething(e){
    const {id} = this.data
    const tag = e.currentTarget.dataset.tag
    const curId = e.currentTarget.dataset.id
    const index = e.currentTarget.dataset.index
    if(tag == 'captain'){
      // 相等 =>  退出队伍
      // 不相等 => 踢人
      id == curId ? this._exitTeam() : this._dropOut(index)
    } else if(tag == 'member'){
      id == curId ? this._exitTeam() : this._showInfo(index)
    }
  },
  showInfo(e){
    const index = e.currentTarget.dataset.index
    this._showInfo(index)
  },
  // 退出队伍
  _exitTeam(){
    console.log("当前用户退出队伍")
  },

  // 踢人
  _dropOut(i){
    const {teamer} = this.data
    console.log("踢人")
    console.log("！！！ 将踢出" + teamer[i].name)
  },
  _showInfo(i){
    const {teamer} = this.data
    console.log("查看成员信息" + teamer[i].name)
    wx.navigateTo({url: `/pages/memberinfo/index?memberid=${teamer[i].id}`})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._formatData()
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