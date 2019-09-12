export const getGoodsCount = function() {
  let count = 0;
  let goodsCount = wx.getStorageSync('cartGoods');
  goodsCount = JSON.parse(goodsCount);
  goodsCount.forEach((item) => {
    count += item.count
  })
  return count;
}