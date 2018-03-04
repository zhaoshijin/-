var wxbarcode = require('../../utils/index.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showView:false,
    showFriend:false,
    code:'85236974'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    showView: (options.showView == "true" ? true : false);
    wxbarcode.barcode('barcode', this.data.code, 680, 200);
    wxbarcode.qrcode('qrcode', this.data.code, 420, 420);
  },
  codeShow:function() {
    var that = this;
    that.setData({
      showView:(!that.data.showView)
    })
  },
  coverHide:function(){
    this.setData({
      showView:false
    })
  },
  toFriend:function() {
    this.setData({
      showFriend: true
    })
  },
  knowClick:function() {
    this.setData({
      showFriend:false
    })
  },
  lookDetail:function() {
    wx.navigateTo({
      url: '../sharing/sharing',
    })
  }
})