// pages/memberWelfare/memberWelfare.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:"晴天",
    jifen:200
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  toHistory:function() {
     wx.navigateTo({
       url: '../memberHis/memberHis',
     })
  },
  toJiFen: function () {
    wx.navigateTo({
      url: '../memberJiFen/memberJiFen',
    })
  }
})