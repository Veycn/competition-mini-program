//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad: function () {
    wx.showLoading({
      title: 'loading...',
    })
    wx.request({
      url: `http://localhost:9009/race/queryallrace`,
      success: res => {
        console.log(res.data.data)
        this.setData({
          list: res.data.data
        })
      }
    })
  },
  onReady() {
    wx.hideLoading()
  },
  data: {
    list: [],
    imgUrls: [
      '/img/public/banner.jpg',
      '/img/public/banner.jpg',
      '/img/public/banner.jpg',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  jumpPage(e) {
    let url = e.currentTarget.dataset.url
    console.log(url)
    wx.navigateTo({ url: `/pages/${url}/index` })
  },
  jumpDetail(e){
    let id= e.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({ url: `/pages/detail/index?raceid=${id}` })
  }
})
