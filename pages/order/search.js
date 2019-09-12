Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:"",
    historyData: [],//搜索历史记录数据
    isShowHistory:false //是否显示历史记录
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //搜索事件
  search(e){
    // 判断是否为空
    // 存入搜索记录缓存
    if (e.detail.inputValue != "") {
      console.log(e.detail.inputValue)
      let searchData = wx.getStorageSync('searchData');
      searchData = JSON.parse(searchData);
      console.log(searchData)
      if (searchData.length === 0) {
        searchData.push(e.detail.inputValue);
      } else {
        let len = searchData.length, flag = false;
        for (let i = 0; i < len; i++) {
          if (searchData[i] === e.detail.inputValue) {
            flag = true;
          }
        }
        if (!flag) {
          searchData.push(e.detail.inputValue);
        }
      }
      searchData = JSON.stringify(searchData);
      wx.setStorageSync('searchData', searchData)
    }
    //跳转搜索商品页面
    wx.navigateTo({
      url: `/pages/list/list?key=${e.detail.inputValue}`
    })
  },
  //清空历史记录
  clear(){
    this.setData({
      historyData: [],
      isShowHistory: false
    })
    let historyData = JSON.stringify(this.data.historyData);
    wx.setStorageSync('searchData', historyData);
  },
  //常用分类点击事件
  toList(event){
    let key = event.target.dataset.key;
    wx.navigateTo({
      url: `/pages/list/list?key=${key}`,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //清空输入框
  close() {
    this.setData({
      inputValue: ""
    })
    console.log(this.data.inputValue)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //获取搜索记录数据
    let history = wx.getStorageSync('searchData');
    history = JSON.parse(history);
    console.log(history)
    if (history.length != 0){
      this.setData({
        historyData: history,
        isShowHistory: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})