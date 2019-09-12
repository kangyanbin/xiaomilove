// pages/order-list/order-list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusType: ["待付款", "待发货", "待收货", "待评价", "已完成"],//头部导航状态类型
    currentType: 0,//当前选中的状态类型
    //模拟订单数据
    goodsListData:[{
      title:"黑鲨游戏手机 2",
      info:"4GB+64GB 经典黑",
      pic:"https://i1.mifile.cn/a1/pms_1545457719.47232999!220x220.png",
      price:1999,
      count:1,
      currentType:0
    }, {
        title: "黑鲨游戏手机 2",
        info: "4GB+64GB 经典黑",
        pic: "https://i1.mifile.cn/a1/pms_1545457719.47232999!220x220.png",
        price: 1999,
        count: 1,
        currentType: 1
      }, {
        title: "黑鲨游戏手机 2",
        info: "4GB+64GB 经典黑",
        pic: "https://i1.mifile.cn/a1/pms_1545457719.47232999!220x220.png",
        price: 1999,
        count: 1,
        currentType: 2
      }, {
        title: "黑鲨游戏手机 2",
        info: "4GB+64GB 经典黑",
        pic: "https://i1.mifile.cn/a1/pms_1545457719.47232999!220x220.png",
        price: 1999,
        count: 1,
        currentType: 3
      },{
        title: "黑鲨游戏手机 2",
        info: "4GB+64GB 经典黑",
        pic: "https://i1.mifile.cn/a1/pms_1545457719.47232999!220x220.png",
        price: 1999,
        count: 1,
        currentType: 4
      }]
  },
  //头部导航事件
  statusTap(e){
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