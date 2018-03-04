var app = getApp()
Page({
  data: {
  },

  //跳转到会员权益
  bindgrade: function () {
    wx.navigateTo({
      url: '../memberdetails/index'
    })
  },

  //跳转到消费明细
  bindspending: function () {
    wx.redirectTo({
      url: '../memberdetails/index'
    })
  },
  //跳转到储值
  bindprepaid: function () {
    wx.navigateTo({
      url: '../prepaid/index'
    })
  },
  //跳转到扫码寻衣
  bindViewTap: function () {
    wx.navigateTo({
      url: '../findClothes/findClothse'
    })
  },
  //跳转到在线商城
  bindbrand: function () {
    wx.redirectTo({
      url: '../onlineshop/index'
    })
  },

  //跳转购物袋
  bindcart: function () {
    wx.navigateTo({
      url: '../shop-cart/index'
    })
  },



  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  



  }
})
