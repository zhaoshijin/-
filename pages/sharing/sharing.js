Page({

  /**
   * 页面的初始数据
   */
  data: {
    showFriend: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  findFriendUp: function() {
    this.setData({
      showFriend: true
    })
  },
  knowClick: function () {
    this.setData({
      showFriend: false
    })
  },
})