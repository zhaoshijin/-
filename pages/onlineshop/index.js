Page({
  data: {
    goodslist: [
      {
        id: "001",
        imgUrl: "http://img5.imgtn.bdimg.com/it/u=2906541843,1492984080&fm=23&gp=0.jpg",
        name: "女装",
        price: "WOMEN",
        cate:1
      },
      {
        id: "002",
        imgUrl: "http://img4.imgtn.bdimg.com/it/u=1004404590,1607956492&fm=23&gp=0.jpg",
        name: "男装",
        price: "MEN",
        cate: 2
      },
      {
        id: "003",
        imgUrl: "http://img1.imgtn.bdimg.com/it/u=2305064940,3470659889&fm=23&gp=0.jpg",
        name: "女孩",
        price: "GIRLS",
        cate: 3
      },
      {
        id: "004",
        imgUrl: "http://img4.imgtn.bdimg.com/it/u=3986819380,1610061022&fm=23&gp=0.jpg",
        name: "男孩",
        price: "BOYS",
        cate: 4
      },
      {
        id: "005",
        imgUrl: "http://img1.imgtn.bdimg.com/it/u=3583238552,3525141111&fm=23&gp=0.jpg",
        name: "幼儿",
        price: "TODDLER",
        cate: 5
      },
      {
        id: "006",
        imgUrl: "http://img2.imgtn.bdimg.com/it/u=1167272381,3361826143&fm=23&gp=0.jpg",
        name: "婴儿",
        price: "BABY",
        cate: 6
      }
  
    ]

  },
  bindcart: function () {
    wx.redirectTo({
      url: '../shop-cart/index'
    })
  },
  bindViewTap: function () {
    wx.redirectTo({
      url: '../list/index'
    })
  },
  bindmembercenter: function () {
    wx.redirectTo({
      url: '../membercenter/index'
    })
  },
  tapgood: function (e) {
    var target = e.currentTarget.dataset;
    var cate = target.cate;  
    var index = target.index;
    wx.navigateTo({
      url: '../classify/index?cate=' + cate +"&index="+index
    })
  }






})  