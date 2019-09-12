let url = "https://www.easy-mock.com/mock/5d1c9227248b1a7af8befac8";
export const getBannerData=()=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url: `${url}/api/lunbo`,
      success(res){
        resolve(res)
      },
      fail(err){
        reject(err)
      }
    })
  })
}
export const getGoodsData = (data) => {
  data = data || {};
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${url}/api/newgoods`,
      data:data,
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}
export const getGoodsDetail = (id) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${url}/api/goods`,
      data: {
        goodsid:id
      },
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}
export const getLoveGoods = () => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${url}/api/hotgoods`,
      data: {
        
      },
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}
export const getClassic = () => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${url}/api/classic`,
      data: {
        
      },
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}
export const getListGoods = (key) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${url}/api/list`,
      data: {
        key: key
      },
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}
export const getCoupon = () => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${url}/api/coupon`,
      data: {
        
      },
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}
export const getChannelData = () => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${url}/api/channel`,
      data: {

      },
      success(res) {
        resolve(res)
      },
      fail(err) {
        reject(err)
      }
    })
  })
}