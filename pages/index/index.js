//index.js
import { getBannerData,getGoodsData } from '../../model/api.js';
//获取应用实例
const app = getApp()

Page({
  data: {
    bannerUrl:[],//轮播图数据
    goodsData:[],//商品数据
    pageIndex:1,//当前页数
    isLoad:false,//是否显示加载动画
    flag:false
  },
  //事件处理函数
  //头部搜索按钮
  searchBtn: function() {
    wx.navigateTo({
      url: '/pages/order/search'
    })
  },
  onLoad: function () {
    //获取轮播图数据
    getBannerData().then((res)=>{
      this.setData({
        bannerUrl:res.data.data
      })
    }).catch((err)=>{
      console.log(err)
    })
    //获取商品数据
    getGoodsData().then((res) => {
      this.setData({
        goodsData: res.data.data
      })
    }).catch((err) => {
      console.log(err)
    })
  },
  //监听滑动到底部事件
  onReachBottom(){
    this.setData({
      flag: true
    })
    let page = this.data.pageIndex + 1;
    getGoodsData({page:page}).then((res) => {
      if(res.data.data.length === 0){
        this.setData({
          isLoad: true
        })
        return;
      }
      this.setData({
        goodsData: this.data.goodsData.concat(res.data.data),
        pageIndex: page,
        flag: false
      })

    }).catch((err) => {
      console.log(err)
    })
  },
  //跳转到频道页
  toChannel(e){
    console.log(e.currentTarget.dataset.name)
    const name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: `/pages/channel/channel?name=${name}`,
    })
  },
  //跳转详情页面
  toDetail(event){
    let id = event.target.dataset.id;
    let poster = event.target.dataset.poster;
    // console.log(poster)
    wx.navigateTo({
      url: `/pages/details/details?goods=${id}&poster=${poster}`,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onShow(){
    // wx.chooseAddress({
    //   success(res) {
    //     console.log(res.userName)
    //     console.log(res.postalCode)
    //     console.log(res.provinceName)
    //     console.log(res.cityName)
    //     console.log(res.countyName)
    //     console.log(res.detailInfo)
    //     console.log(res.nationalCode)
    //     console.log(res.telNumber)
    //   }
    // })
  }
})
