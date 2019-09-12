// components/search-head/search-head.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    inputValue:{
      type:String,
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue:""
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //搜索按钮事件
    search(){
      this.triggerEvent("search", { inputValue: this.data.inputValue});
    },
    bindKeyInput: function (e) {
      this.setData({
        inputValue: e.detail.value
      })
    },
    close(){
      this.setData({
        inputValue:""
      })
      // console.log(this.data.inputValue)
    }
  }
})
