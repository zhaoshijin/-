Page({

  /**
   * 页面的初始数据
   */
  data: {
    quanTitle:'情人节大酬宾',
    quanPrice:100,
    selected:true,
    selected1: false
  },
  selected: function(e) {
    this.setData({
      selected1: false,
      selected: true
    })
  },
  selected1: function(e) {
    this.setData({
      selected: false,
      selected1: true
    })
  },
  voucherClick:function() {
    wx.navigateTo({
      url: '../quanDetail/quanDetail',
    })
  }

})