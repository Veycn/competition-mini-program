// pages/myinfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userinfo: {
      avatar: '/img/avatar.jpg',
      name: '杨小平', sex: 'male',
      grade: '2016', school: '重庆邮电大学',
      major: '智能科学与技术', phone: '17784450729',
      num: '2016211624', qq: '1594325241'
    },
    reflect:  {
      avatar: '/img/avatar.jpg',
      name: '姓名', sex: '性别',
      grade: '年级', school: '学校',
      major: '专业', phone: '电话',
      stuid: '学号', qq: 'Q Q'
    },
    tags: ['创新', 'C++', 'C', 'Python', '论文', 'ACM', '编程'],
    isInfoToastShow: false,
    activeTag: null
  },
  toastClose(){
    this.setData({isInfoToastShow: false})
  },
  showInfoToast(e){
    let tag = e.currentTarget.dataset.tag
    let {activeTag} = this.data
    if(tag == 'info'){
      activeTag = 1
    } else if(tag == 'tag'){
      activeTag = 2
    }
    this.setData({isInfoToastShow: true, activeTag})
  },
  onFormInput(e){
    console.log(e)
    let item = e.currentTarget.dataset.item
    let value = e.detail.value
    console.log(item, value)
    let {userinfo} = this.data
    userinfo[item] = value
    this.setData({userinfo})
  },
  submitChange(){

    this.toastClose()
  },
  tagInput(e){
    let tags = e.detail.value.replace(/(\，)/g, ',').split(",")
    this.setData({tags})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMyInfo()
  },

  getMyInfo(){
    wx.getStorage({
      key: 'user',
      success: res => {
        console.log(res.data)
        let {name, sex, school, grade, major, stuid, phone, qq} = res.data
        this.setData({userinfo: {name, sex, school, grade, major, stuid, phone, qq}})
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