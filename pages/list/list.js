// 搜索结果页面
import { getListGoods } from '../../model/api.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [],//搜索商品数据
    navSelect: "promotion",//选中的导航选项['promotion','sales','price'],默认综合promotion
    priceSelect: "lower",//价格筛选['lower',high],默认'lower'
    inputValue:""//输入框的值
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取通过路由传过来的搜索关键词
    // console.log(options.key)
    this.setData({
      inputValue:options.key
    })
    // console.log(this.data.inputValue)
    //发送请求,获取数据
    getListGoods(options.key).then((res)=>{
      this.setData({
        listData: res.data.data.list
      })
      console.log(res.data.data.list)
    }).catch((err)=>{
      console.log(err)
    })
  },
  //搜索按钮事件
  tosearch(e){
    console.log(e.detail.inputValue)
    // 判断是否为空
    // 存入搜索记录缓存
    if (e.detail.inputValue != "") {
      // console.log(e.detail.inputValue)
      let searchData = wx.getStorageSync('searchData');
      searchData = JSON.parse(searchData);
      // console.log(searchData)
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
    //发请求
    getListGoods(e.detail.inputValue).then((res) => {
      this.setData({
        listData: res.data.data.list
      })
      console.log(res.data.data.list)
    }).catch((err) => {
      console.log(err)
    })
  },
  //综合筛选按钮
  promotionBtn() {
    this.setData({
      navSelect: "promotion",
      priceSelect: "lower"
    })
  },
  //销量筛选按钮
  salesBtn() {
    this.setData({
      navSelect: "sales",
      priceSelect: "lower"
    })
  },
  //价格筛选按钮
  priceBtn() {
    if(this.data.priceSelect === "lower"){
      this.setData({
        navSelect: "price",
        priceSelect: "high"
      })
    }else{
      this.setData({
        navSelect: "price",
        priceSelect: "lower"
      })
    }
    
  },
  //跳转详情页
  toDetail(event) {
    // 如果点击的是添加事件元素的子元素，就用e.currentTarget来获取父元素的值，用e.target来获取子元素的值，如果没有子元素，e.target === e.currentTarget
    // e.target 指向的是触发事件监听的对象。
    // e.currentTarget 指向的是添加监听事件的对象。
    let id = event.currentTarget.dataset.id;
    //poster 缩略图url
    let poster = event.currentTarget.dataset.poster;
    console.log(event)
    wx.navigateTo({
      url: `/pages/details/details?goods=${id}&poster=${poster}`,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
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