// pages/channel/channel.js
import { getChannelData } from '../../model/api.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerUrl: [
      { id: 14763, imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d29d52bba5fd11a39f01c488a4f759a8.jpg?f=webp&w=1080&h=540&bg=550195"},
      { id: 14686, imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a8e9be06abf3d650af047bf3a4024df5.jpg?f=webp&w=1080&h=540&bg=FFD6FF" },
      { id: 14641, imgUrl: "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2943541eab405370f25a8c46ffcbe5ae.jpg?f=webp&w=1080&h=540&bg=20808" },
    ],
    channelData:[],
    header:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    const title = options.name+"频道页";
    wx.setNavigationBarTitle({
      title: title
    })
    //获取商品数据
    getChannelData().then((res) => {
      this.setData({
        channelData: res.data.data
      })
      console.log(this.data.channelData)
    }).catch((err) => {
      console.log(err)
    })
  },
  //跳转详情页面
  toDetail(event) {
    let id = event.target.dataset.id;
    let poster = event.target.dataset.poster;
    // console.log(poster)
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