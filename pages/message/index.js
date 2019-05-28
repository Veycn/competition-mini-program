// pages/message/index.js
var sliderWidth = 96;
Page({

  /**
   * Page initial data
   */
  data: {
    array: ['华为杯', '挑战杯', 'ACM大赛', '美国大学生数学建模大赛'],
    tabs: ["个人意向", "团队招人"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    isToastHidden: false,
    toastTitle: '',
    toastHeight: 800,
    race: '',
    points: '',
    forwards: '',
    role: '',
    index: 0
  },
  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  add(e) {
    let tag = e.currentTarget.dataset.tag
    let { activeIndex } = this.data
    if (activeIndex == 0) {
      this.setData({ toastTitle: '我想找个队伍～', toastHeight: 730 })
    } else if (activeIndex == 1) {
      this.setData({ toastTitle: '我们想找个队友～', toastHeight: 670 })
    }
    this.setData({ isToastHidden: true })
  },

  toastClose() {
    this.setData({ isToastHidden: false })
  },


  raceInput(e) { this.setData({ race: e.detail.value }) },
  pointInput(e) { this.setData({ points: e.detail.value }) },
  forwardInput(e) { this.setData({ forwards: e.detail.value }) },
  roleInput(e) { console.log(e); this.setData({ role: e.detail.value }) },

  release(e) {
    let tag = e.currentTarget.dataset.tag
    let { race, points, forwards, role, array, index, userid, teamid } = this.data
    var self = this
    let competition = array[index]
    if (tag == 'member') {
      
      wx.request({
        url: 'http://localhost:9009/msg/createpersonalmsg',
        method: 'POST',
        data: { competition, requirements: forwards, userid, cando: role },
        success: res => {
          if (res.data.code == 1) {
            wx.showToast({
              title: '发布成功',
              duration: 1000
            })
            this.toastClose()
            this.getAllPersonalMsg()
          }
        }
      })
    } else if (tag == 'team') {
      console.log('找队友 ' + race, points, forwards, teamid, userid)
      wx.request({
        url: 'http://localhost:9009/msg/createteammsg',
        method: "POST",
        data: {teamid, requirement: forwards, advantage: points, leader: userid, competition},
        success: res => {
          console.log(res)
          if(res.data.code == 1){
            wx.showToast({
              title: '发布成功!',
              duration: 1000
            })
            this.getAllTeamMsg()
          }else if(+res.data.code == -1){
            wx.showToast({
              title: res.data.msg,
              duration: 1000
            })
          }
          this.toastClose()
        }
      })
    }
  },

  showDetail(e){
    console.log(e)
    let userid = e.currentTarget.dataset.userid
    wx.navigateTo({url: `/pages/personbaseinfo/index?userid=${userid}`})
  },
  showTeam(){
    console.log("查看队伍详情， 确定是否有意向加入～")
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
    wx.getStorage({
      key: 'user',
      success: (res) => {
        console.log(res.data)
        this.setData({ userid: res.data.id, teamid: res.data.team })
      }
    })
    this.getAllPersonalMsg()
    this.getAllTeamMsg()
  },
  getAllPersonalMsg() {
    wx.request({
      url: "http://localhost:9009/msg/queryallpersonalmsg",
      success: res => {
        console.log(res.data.data)
        this.setData({
          pList: res.data.data.reverse()
        })
      }
    })
  },
  getAllTeamMsg() {
    wx.request({
      url: "http://localhost:9009/msg/getallteammsg",
      success: res => {
        console.log(res.data.data.data)
        this.setData({
          tList: res.data.data.data
        })
      }
    })
  },
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {
    console.log("下拉刷新个人信息团队信息～")
    this.getAllPersonalMsg()
    this.getAllTeamMsg()
  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})