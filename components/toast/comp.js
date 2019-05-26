// components/toast/comp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 指定弹窗的高度
    height: {
      type: Number
    },
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClose(){
      console.log(11)
      this.triggerEvent("toastClose", {})
    }
  }
})
