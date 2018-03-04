var app = getApp()

Page({
  data: {
    phone: '',
    password: ''
  },

  // 获取输入账号  
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码  
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },


  // 登录  
  login: function () {
    if (this.data.phone.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '不能为空',
        icon: 'loading',
        duration: 2000
      })
      return;
    }
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (!myreg.test(this.data.password)) {
      wx.showToast({
        title: '手机号有误！',
        icon: 'loading',
        duration: 1500
      })
      return;
    }

    if (!this.data.isChecked) {
      wx.showToast({
        title: '此项为必选项',
        icon: 'loading',
        duration: 2000
      })
      return;
    }


    // 跳转会员中心页面  
    wx.navigateTo({
      url: '../membercenter/index'
    })
    wx.showToast({
      title: '登录成功',
      icon: 'success',
      duration: 2000
    })
  },
  // 是否同意条款
  listenCheckboxChange: function (e) {
    if (e.detail.value.length > 0) {
      this.setData({ isChecked: true });
    }
    else {
      this.setData({ isChecked: false });
    }


  },
  //会员卡详情
  binddetails: function () {
    wx.navigateTo({
      url: '../memberdetails/index'
    })
  }







})  