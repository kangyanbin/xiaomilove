// pages/details/details.js
import { getGoodsDetail, getLoveGoods } from '../../model/api.js';
import { getAddress } from '../../utils/getAddress.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailData:null,//详情页数据
    detailBanner:[],//详情页轮播图数据
    videoSrc:"",//视频地址
    indicatorDots: true,//开启轮播图小圆点
    autoplay: true,//自动播放
    interval: 5000,//自动切换时间间隔
    duration: 1000,//动画滑动时长
    circular: true,//切换无缝连接
    address:"",//地址组件信息
    loveGoods:[],//猜你喜欢商品数据
    poster:"",//商品缩略图地址
    count:0,//左下角购物车显示的件数
    summary: true,//概述按钮状态
    param: false //参数按钮状态
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let poster = options.poster;
    console.log(options)
    this.setData({
      poster:poster
    })
    //发送请求获取商品详情数据
    getGoodsDetail(options.goods).then((res) => {
      // console.log(res.data.data[0]);
      res.data.data[0].desc_pictrues = JSON.parse(res.data.data[0].desc_pictrues);
      res.data.data[0].param = JSON.parse(res.data.data[0].param);
      this.setData({
        detailData: res.data.data[0],
        detailBanner: JSON.parse(res.data.data[0].posters),
        videoSrc: res.data.data[0].video

      })
      // console.log(this.data.detailData)
      //设置页面标题
      wx.setNavigationBarTitle({
        title: this.data.detailData.title
      })
    }).catch((err) => {
      console.log(err)
    })
    //获取地址信息
    getAddress().then(res=>{
      let ads = `${res.addressComponent.province}${res.addressComponent.city}${res.addressComponent.district}`
      this.setData({
        address:ads
      })
      // console.log(this.data.address)
    })
    //获取喜欢商品数据
    getLoveGoods().then(res=>{
      // console.log(res.data.data);
      this.setData({
        loveGoods: res.data.data
      })
    })
    let num = this.getGoodsCount();
    this.setData({
      count: num
    })
  },
  //滑动轮播图事件,当滑过视频时,让视频停止播放
  bannerVideo(event){
    if(event.detail.current !== 0){
      let video = wx.createVideoContext("cureenvideo");
      video.pause();
    };
  },
  //开启视频播放,停止轮播
  playVideo(){
    this.setData({
      autoplay:false
    })
  },
  //停止视频播放,开启轮播
  pauseVideo() {
    this.setData({
      autoplay: true
    })
  },
  //视频播放完毕,开启轮播
  endVideo() {
    this.setData({
      autoplay: true
    })
  },
  //猜你喜欢的商品事件
  toDetail(event) {
    let id = event.target.dataset.id;
    // console.log(id);
    // id = "A002";
    wx.navigateTo({
      url: `/pages/details/details?goods=${id}`,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //跳转购物车
  toCart(){
    wx.switchTab({
      url: '/pages/cart/cart',
      success: function (res) { },
      fail: function (err) {
        console.log(err)
       },
      complete: function (res) { },
    })
  },
  //获取购物车件数
  getGoodsCount() {
    let count = 0;
    let goodsCount = wx.getStorageSync('cartGoods');
    goodsCount = JSON.parse(goodsCount);
    goodsCount.forEach((item) => {
      count += item.count
    })
    return count;
  },
  //添加到购物车
  addcart(){
    let cart = wx.getStorageSync('cartGoods');
    // if (typeof (cart) === "string"){
    //   cart = JSON.parse(cart);
    // }
    cart = JSON.parse(cart);
    console.log(cart)
    let newGoods = {
      select: false,
      posterUrl:this.data.poster,
      title:this.data.detailData.title,
      count:1,
      price:this.data.detailData.price,
      goodsId: this.data.detailData.product_id,
      del:""
    }
    if(cart.length === 0){
      cart.push(newGoods);
    }else{
      let len = cart.length,flag = false;
      for(let i = 0;i < len;i++){
        if(cart[i].goodsId === newGoods.goodsId){
          cart[i].count++;
          flag = true;
        }
      }
      if(!flag){
        cart.push(newGoods);
      }
    }
    cart = JSON.stringify(cart);
    wx.setStorageSync('cartGoods',cart)
    
    let num = this.getGoodsCount();
    this.setData({
      count:num
    })
    wx.showToast({
      title: '添加成功'
    })
  },
  //商品概述按钮事件
  summaryBtn() {
    this.setData({
      summary: true,
      param: false 
    })
  },
  //商品参数按钮事件
  paramBtn() {
    this.setData({
      summary: false,
      param: true
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