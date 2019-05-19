function jumpPage(e){
  let url = e.currentTarget.dataset.url
  wx.navigateTo({
    url: `/pages/${url}/index`,
    data: data
  })
}

export {
  jumpPage
}