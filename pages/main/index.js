//index.js
//获取应用实例
const app = getApp()

Page({
  onLoad: function () {
    wx.showLoading({
      title: 'loading...',
    })
  },
  onReady() {
    wx.hideLoading()
  },
  data: {
    list: [
      { imgUrl: '/img/public/cup.png', title: '华为杯', startTime: '2019.05.11-12:00', endTime: '2019.05.11-12:00', types: '工程机械， 计算机， 编程', id: '12345' },
      { imgUrl: '/img/public/cup.png', title: '未来杯', startTime: '2019.05.11-12:00', endTime: '2019.05.11-12:00', types: '工程机械， 计算机， 编程', id: '12345' },
      { imgUrl: '/img/public/cup.png', title: '挑战杯', startTime: '2019.05.11-12:00', endTime: '2019.05.11-12:00', types: '工程机械， 计算机， 编程', id: '12345' },
      { imgUrl: '/img/public/cup.png', title: '数模大赛', startTime: '2019.05.11-12:00', endTime: '2019.05.11-12:00', types: '工程机械， 计算机， 编程', id: '12345' },
      { imgUrl: '/img/public/cup.png', title: 'ACM编程大赛', startTime: '2019.05.11-12:00', endTime: '2019.05.11-12:00', types: '工程机械， 计算机， 编程', id: '12345' },
    ],

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
    let id = e.currentTarget.dataset.id
    console.log(id)
    wx.navigateTo({ url: `/pages/detail/index?raceid=${id}` })
  }
})
