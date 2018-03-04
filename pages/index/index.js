//获取应用实例
var app = getApp()
Page({
    data: {
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        loadingHidden: false , // loading
        showModalStatus: false     
  },
    
  
  powerDrawer: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },
  bindcustomerservice: function () {
    this.setData({ showModalStatus: true })
  },
  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例   
    var animation = wx.createAnimation({
      duration: 200,  //动画时长  
      timingFunction: "linear", //线性  
      delay: 0  //0则不延迟  
    });

    // 第2步：这个动画实例赋给当前的动画实例  
    this.animation = animation;

    // 第3步：执行第一组动画  
    animation.opacity(0).rotateX(-100).step();

    // 第4步：导出动画对象赋给数据对象储存  
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画  
    setTimeout(function () {
      // 执行第二组动画  
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象  
      this.setData({
        animationData: animation
      })

      //关闭  
      if (currentStatu == "close") {
        this.setData(
          {
            showModalStatus: false
          }
        );
      }
    }.bind(this), 200)

    // 显示  
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
  },

    //事件处理函数
    bindNewmember: function () {
      wx.navigateTo({
        url: '../brand/index'
      })
    },

    bindViewTap: function () {
      wx.navigateTo({
        url: '../findClothes/findClothse'
      })
    },

    bindbrand: function () {
      wx.navigateTo({
        url: '../onlineshop/index'
      })
    },

    bindcart: function () {
      wx.navigateTo({
        url: '../shop-cart/index'
      })
    },

    bindplace: function () {
        wx.navigateTo({
          url: '../selectplace/index',
        })
    },

    binddata: function () {
      wx.navigateTo({
        url: '../memberData/memberData',
      })
    },

    bindorder: function () {
      wx.navigateTo({
        url: '../orderQuery/orderQuery',
      })
    },
    

    bindcoupon: function () {
      wx.navigateTo({
        url: '../myCoupons/myCoupons',
      })
    },

    bindspending: function () {
      wx.navigateTo({
        url: '../memberWelfare/memberWelfare',
      })
    },

    // 没有会员卡时提醒
    // bindorder:function(){
    //   wx.showModal({
    //     title: '您还未注册会员',
    //     content: '前往注册',
    //     success: function (res) {
    //       if (res.confirm) {
    //         wx.navigateTo({
    //           url: '../brand/index'
    //         })
    //       } else {
    //         console.log('用户点击取消')
    //       }

    //     }
    //   })

    // },


    // 没有会员卡时提醒
    // bindcoupon: function () {
    //   wx.showModal({
    //     title: '您还未注册会员',
    //     content: '前往注册',
    //     success: function (res) {
    //       if (res.confirm) {
    //         wx.navigateTo({
    //           url: '../brand/index'
    //         })
    //       } else {
    //         console.log('用户点击取消')
    //       }

    //     }
    //   })

    // },


    // 没有会员卡时提醒
    // bindspending: function () {
    //   wx.showModal({
    //     title: '您还未注册会员',
    //     content: '前往注册',
    //     success: function (res) {
    //       if (res.confirm) {
    //         wx.navigateTo({
    //           url: '../brand/index'
    //         })
    //       } else {
    //         console.log('用户点击取消')
    //       }

    //     }
    //   })

    // },


    



    // 没有会员卡时提醒
    // binddata: function () {
    //   wx.showModal({
    //     title: '您还未注册会员',
    //     content: '前往注册',
    //     success: function (res) {
    //       if (res.confirm) {
    //         wx.navigateTo({
    //           url: '../brand/index'
    //         })
    //       } else {
    //         console.log('用户点击取消')
    //       }

    //     }
    //   })

    // },

    bindcalling: function (e) {
      wx.makePhoneCall({
        phoneNumber: e.currentTarget.dataset.calling, //此号码并非真实电话号码，仅用于测试  
        success: function () {
          console.log("拨打电话成功！")
        },
        fail: function () {
          console.log("拨打电话失败！")
        }
      })
    } ,

   


    onLoad: function() {
        console.log('onLoad')
        var that = this
            //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })

        //sliderList
        wx.request({
            url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
            method: 'GET',
            data: {},
            header: {
                'Accept': 'application/json'
            },
            success: function(res) {
                that.setData({
                    images: res.data
                })
            }
        })




        // 判断是否为会员，有会员跳到会员首页
        













    }






































    
})
