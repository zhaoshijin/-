Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab:0,
    curBdIndex: 0,
    orderCard:3200000104

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  tabNav:function(e) {
    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },
  orderDetailClick:function() {
      wx.navigateTo({
        url: '../orderDetail/orderDetail',
      })
  }

  
})