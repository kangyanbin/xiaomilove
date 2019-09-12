// pages/payorder/payorder.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasAddres:false,
    addresData:{},
    hasCoupon: true,
    couponData: {
      name:"小米CC9 专属100元优惠卷",
      price:"100.00"
    },
    goods:[],
    total:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    this.setData({
      goods:JSON.parse(options.goods),
      total:options.total
    })
    console.log(this.data.goods)
  },
  addAddres(){
    // let addresData;
    let that = this;
    wx.chooseAddress({
      success(res) {
        // addresData = res;
        that.setData({
          hasAddres:true,
          addresData:res
        })
        console.log(res.userName)
        console.log(res.postalCode)
        console.log(res.provinceName)
        console.log(res.cityName)
        console.log(res.countyName)
        console.log(res.detailInfo)
        console.log(res.nationalCode)
        console.log(res.telNumber)
      }
    })
    console.log(this.data.addresData);
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