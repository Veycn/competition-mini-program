//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad: function () {
    wx.showLoading({
      title: 'loading...',
    })
  },
  onReady(){
    wx.hideLoading()
  },
  data: {
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
  }
})
