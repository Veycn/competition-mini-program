// pages/message/index.js
var sliderWidth = 96;
Page({

  /**
   * Page initial data
   */
  data: {
    array: ['华为杯','挑战杯','ACM大赛','美国大学生数学建模大赛'],
    tabs: ["个人意向", "团队招人", "与我相关"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    isToastHidden: false,
    toastTitle: '',
    toastHeight: 600,
    race: '',
    points: '',
    forwards: ''
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
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
    console.log(e)
    let tag = e.currentTarget.dataset.tag
    let { activeIndex } = this.data
    if (activeIndex == 0) {
      this.setData({ toastTitle: '我想找个队伍～' , toastHeight: 580})
    } else if (activeIndex == 1) {
      this.setData({ toastTitle: '我们想找个队友～', toastHeight: 670 })
    }
    this.setData({ isToastHidden: true })
  },

  toastClose() {
    console.log('close')
    this.setData({ isToastHidden: false })
  },


  raceInput(e) { this.setData({ race: e.detail.value }) },
  pointInput(e) { this.setData({ points: e.detail.value }) },
  forwardInput(e) { this.setData({ forwards: e.detail.value }) },

  release(e){
    let tag = e.currentTarget.dataset.tag
    let {race, points, forwards} = this.data
    var self = this
    if(tag =='member'){
      console.log('找团队 ' + race, points, forwards)
    } else if(tag == 'team'){
      console.log('找队友 ' + race, points, forwards)
    }
    

    // 发布请求
    // wx.request({
    //   url: ``,
    //   data: {race, points, forwards},
    //   success(res){
    //     self.setData({race: '', points: '', forwards: ''})
    //   }
    // })
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