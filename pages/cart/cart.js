// pages/cart/cart.js
import { getGoodsCount } from '../../utils/getGoodsCount.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsOrder:[],//购物车订单
    hasGoods:false,//购物车是否有商品
    total:0,//总价
    orderNum:0,//订单数量
    allSelect:false, //全选状态
    clientX:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  //点击订单事件
  hasSelect(){
    // console.log(1);
  },
  //选中订单按钮
  statusBtn(e){
    let goodsOrder = this.data.goodsOrder;
    //获取点击的订单下标
    let i = e.target.dataset.index;
    //改变状态
    goodsOrder[i].select = !goodsOrder[i].select;
    let flag = false;
    for (let i = 0; i < goodsOrder.length; i++) {
      if (!goodsOrder[i].select) {
        this.setData({
          allSelect: false
        })
        flag = true
      }
    }
    if (!flag) {
      this.setData({
        allSelect: true
      })
    }
    //总价模块
    this.setTotal();
    //选中订单数量
    this.setSelectOrderNum();
  },
  //全选状态
  allStatus(){
    this.setData({
      allSelect: !this.data.allSelect
    })
    let goodsOrder = this.data.goodsOrder;
    if (this.data.allSelect){
      for (let i = 0; i < goodsOrder.length; i++) {
        goodsOrder[i].select = true;
      }
    }else{
      for (let i = 0; i < goodsOrder.length; i++) {
        goodsOrder[i].select = false;
      }
    }
    this.setData({
      goodsOrder: goodsOrder
    })
    //总价模块
    this.setTotal();
    //选中订单数量
    this.setSelectOrderNum();
  },
  //结算
  toBuy(){
    let arr = [];
    for (let i = 0; i < this.data.goodsOrder.length;i++){
      if (this.data.goodsOrder[i].select){
        arr.push(this.data.goodsOrder[i])
      }
    }
    arr = JSON.stringify(arr)
    console.log(arr)
    if (this.data.orderNum != 0){
      console.log("可以购买")
      wx.navigateTo({
        url: `/pages/payorder/payorder?goods=${arr}&total=${this.data.total}`,
      })
    }
  },
  //选中订单数量
  setSelectOrderNum(){
    let num = 0;
    for (let i = 0; i < this.data.goodsOrder.length; i++) {
      if (this.data.goodsOrder[i].select) {
        num++;
      }
    }
    this.setData({
      orderNum: num
    })
  },
  //总价
  setTotal(){
    let goodsOrder = this.data.goodsOrder;
    let orderTotal = 0;
    for (let i = 0; i < goodsOrder.length; i++) {
      if (goodsOrder[i].select) {
        orderTotal += goodsOrder[i].count * goodsOrder[i].price;
      }
    }
    this.setData({
      total: orderTotal
    })
  },
  touchstart(e) { 
    console.log("start")
    // console.log(e.touches[0].clientX)
    this.setData({
      clientX: e.touches[0].clientX
    })
  },
  touchmove(e) {
    console.log("move")
    // console.log(e.touches[0].clientX)
  },
  touchend(e) {
    console.log("end")
    // console.log(e)
    // console.log(e.currentTarget.dataset.index)
    // console.log(e.changedTouches[0].clientX)
    const index = e.currentTarget.dataset.index
    let goodsOrder = this.data.goodsOrder;
    if ((this.data.clientX - e.changedTouches[0].clientX) > 20){
      console.log("开启删除")
      if (goodsOrder[index].del === "") {
        // console.log(goodsOrder[index].del)
        goodsOrder[index].del = "active";
        this.setData({
          goodsOrder: goodsOrder
        })
        console.log(this.data.goodsOrder)
      }
    } else if ((this.data.clientX - e.changedTouches[0].clientX) < -20){
      console.log("关闭删除")
      if (goodsOrder[index].del === "active") {
        goodsOrder[index].del = "";
        this.setData({
          goodsOrder: goodsOrder
        })
      }
    }
  },
  //删除购物车商品
  delGoods(e){
    const index = e.currentTarget.dataset.index;
    let carts = this.data.goodsOrder;
    carts.splice(index, 1);
    this.setData({
      goodsOrder: carts
    });
    if (carts.length === 0) {
      this.setData({
        hasGoods: true
      })
    }
    carts = JSON.stringify(carts);
    wx.setStorageSync('cartGoods', carts)
    this.setTotal();
    this.setSelectOrderNum();
    console.log(e)
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
    //取消全选缓存
    this.setData({
      allSelect: false,
      orderNum : 0
    })
    //从缓存中获取购物车订单列表
    let cartGoods = wx.getStorageSync('cartGoods');
    cartGoods = JSON.parse(cartGoods);
    if (cartGoods.length === 0){
      this.setData({
        hasGoods: true
      })
    }else{
      this.setData({
        // total: orderTotal,
        hasGoods: false,
        goodsOrder: cartGoods
      })
    }
    console.log(cartGoods)
    
    
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