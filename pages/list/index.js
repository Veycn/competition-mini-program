// pages/list/index.js

// import { jumpPage } from '../../utils'
Page({

  /**
   * Page initial data
   */
  data: {
    levels: ['全部','校级', '省级', '国家级', '国际'],
    types: ['全部','理工', '文体', '商业', '数模', '程序设计', '大数据', '工程机械', '电子&自动化', '环境能源', '船舶海洋'],
    active1: 0,
    active: 0,
    list: [],
  },

  jumpDetail(e){
    let id= e.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({ url: `/pages/detail/index?raceid=${id}` })
  },

  changeClass(e){
    let index = e.currentTarget.dataset.index
    let tag = e.currentTarget.dataset.tag
    if(tag == 'level'){
      this.setData({active1: index})
      if(index == 0){
        this.getData()
      } else {
        wx.request({
          url: "http://localhost:9009/race/queryallracebylevel",
          data: {level: index},
          success: res => {
            console.log(res)
            if(res.statusCode == 200){
              this.setData({
                list: res.data
              })
            }
          }
        })
      }
    }else if(tag == 'type'){
      this.setData({active: index})
      let {active1, types} = this.data
      let type = types[index]
     }
  },
  getData () {
    wx.request({
      url: "http://localhost:9009/race/getrecentraces",
      success: res => {
        console.log(res)
        if(res.statusCode == 200){
          this.setData({
            list: res.data
          })
        }
      }
    })
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.getData()
  },

  jumpPage(e){
    let url = e.currentTarget.dataset.url
    wx.navigateTo({url: `/pages/${url}/index`})
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
    console.log(111)
  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})