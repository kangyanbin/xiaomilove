import { getCoupon } from '../../model/api.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav: ["未使用","已使用/已过期"],//页面头部导航数据
    currentType: 0,//当前选中的导航下标
    couponData:[]//优惠卷数据
  },
  //导航按钮事件
  navBtn(e) {
    const curType = e.currentTarget.dataset.index;
    this.setData({
      currentType: curType
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    //获取优惠卷数据
    getCoupon().then((res)=>{
      console.log(res.data.data)
      let data = res.data.data;
      for(let i = 0;i<data.length;i++){
        data[i].money = parseInt(data[i].money).toString();
        data[i].status = parseInt(data[i].status);
      }
      this.setData({
        couponData: data
      })
    })
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