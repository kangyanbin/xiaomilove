// pages/wo/wo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfo: "",//用户信息
    nickName: "",//用户名
    avatarUrl: "",//头像地址
    gender: "",//性别
    province: "",//省份
    city: "",//城市
    country: ""//国家
  },
  //跳转订单页面
  toOrderList(){
    wx.navigateTo({
      url: '/pages/order-list/order-list',
    })
  },
  //跳转优惠卷页面
  toCouPon(){
    wx.navigateTo({
      url: '/pages/coupon/coupon',
    })
  },
  //跳转会员中心页面
  toMembers() {
    wx.navigateTo({
      url: '/pages/members/members',
    })
  },
  //跳转设置页面
  toSet(){
    wx.navigateTo({
      url: '/pages/set/set',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    //获取用户信息
    wx.getUserInfo({
      success: function (res) {
        var userInfo = res.userInfo
        var nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        that.setData({
          userInfo,
          nickName,
          avatarUrl,
          gender,
          province,
          city,
          country
        })
      }
    })
  },
    // wx.getSetting({
    //   success(res) {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称
    //       wx.getUserInfo({
    //         success: function (res) {
    //           console.log(res.userInfo)
    //         }
    //       })
    //     }
    //   }
    // })
  // },
  // bindGetUserInfo(e) {
  //   console.log(e.detail.userInfo)
  // },

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