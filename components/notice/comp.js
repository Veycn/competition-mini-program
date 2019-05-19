// components/notice/comp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // notice: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    notice: '有新的伙伴想加入您的队伍～'
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    closeNotice(){
      this.triggerEvent("closeNotice", {})
    },
  }
})
