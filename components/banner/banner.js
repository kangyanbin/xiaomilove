// components/banner/banner.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 轮播图数据
    bannerUrl:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: [
      // 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      // 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      // 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorDots: true,//开启轮播图小圆点
    autoplay: true,//自动播放
    interval: 5000,//自动切换时间间隔
    duration: 1000,//动画滑动时长
    circular: true //切换无缝连接
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
