// pages/classic/classic.js
import { getClassic } from '../../model/api.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView:"m1",//当前选中的分类选项,默认m1
    classicData:[]//分类页面数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取分类数据信息
    getClassic().then((res)=>{
      let data = res.data.data.splice(-3);
      console.log(data)
      this.setData({
        classicData: res.data.data
      })
      console.log(this.data.classicData)
    })
  },
  //左侧导航事件
  nav(e){
    // console.log(e.target.dataset.name)
    this.setData({
      toView: e.target.dataset.name
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