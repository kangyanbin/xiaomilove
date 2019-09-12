export const getAddress = function () {
  return new Promise((resolve, reject) => {
    wx.getLocation({
      type: 'gcj02',
      altitude: false,
      success: function (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        // console.log(res)
        getLocation(latitude, longitude).then(res=>{
          resolve(res)
        })
      },
      fail: function (err) { },
      complete: function (res) { },
    })
  })
}
function getLocation(latitude, longitude){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: `http://api.map.baidu.com/reverse_geocoding/v3/?ak=wXRgyLXu8WsLTc578o9b6MzG5PaWajzD&output=json&coordtype=gcj02ll&location=${latitude},${longitude}`,
      success: function (res) {
        // console.log(res)
        resolve(res.data.result)
      },
      fail:function(err){
        console.log(err)
      }
    })
  })
  
}