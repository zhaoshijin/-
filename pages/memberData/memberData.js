// pages/memberData/memberData.js
var util = require('../../utils/util.js'); 
// var util = require('../../utils/citys.js');
// var p = 0,c = 0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userPhone:12345678910,
    userName:"剪刀手",
    data: "请选择生日",
    array:["请选择性别","男","女"],
    array1:["请选择偏好语言","简体","繁体","英文"]
    // provinceName: [],
    // provinceCode: [],
    // provinceSelIndex: '',
    // cityName: [],
    // cityCode: [],
    // citySelIndex: '',
    // cityEnabled: false,
    // districtEnabled: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用函数时，传入new Date()参数，返回值是日期和时间  
    var time = util.formatTime1(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    this.setData({
        time:time,
        index:0,
        index1:0
    }); 
    // this.setAreaData()
  },







  // // 选择省
  // changeProvince: function (e) {
  //   this.resetAreaData('province')
  //   p = e.detail.value
  //   this.setAreaData('province', p)
  // },
  // // 选择市
  // changeCity: function (e) {
  //   this.resetAreaData()
  //   c = e.detail.value
  //   this.setAreaData('city', p, c)
  // },
  // setAreaData: function (t, p, c, d) {
  //   switch (t) {
  //     case 'province':
  //       this.setData({
  //         provinceSelIndex: p,
  //         cityEnabled: true
  //       })
  //       break;
  //     case 'city':
  //       this.setData({
  //         citySelIndex: c,
  //         districtEnabled: true
  //       })
  //   }

  // var p = p || 0;
  // var c = c || 0;
  // // 设置省的数据
  // var province = area['100000']
  // var provinceName = [];
  // var provinceCode = [];
  // for (var item in province) {
  //   provinceName.push(province[item])
  //   provinceCode.push(item)
  // }
  // this.setData({
  //   provinceName: provinceName,
  //   provinceCode: provinceCode
  // })
  // // 设置市的数据
  // var city = area[provinceCode[p]]
  // var cityName = [];
  // var cityCode = [];
  // for (var item in city) {
  //   cityName.push(city[item])
  //   cityCode.push(item)
  // }
  // this.setData({
  //   cityName: cityName,
  //   cityCode: cityCode
  // })
  // if (t == "city") {

  // }
  //},



  bindPickerChange:function(e) {
    console.log(e);
    this.setData({
      data:e.detail.value
    })
  },
  bindSelectorChange:function(e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindSelector1Change:function(e) {
    this.setData({
      index1: e.detail.value
    })
  },
  makeSure:function(e) {
    wx.showModal({
      title: '提示',
      content: '是否确认修改',
      success:function(res) {
        if(res.confirm) {
          wx.navigateTo({
            url: '',
          })
        }
      }
    })
  }
})