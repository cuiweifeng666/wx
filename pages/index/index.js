//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    urlGroup: [
      {
        text: '排行',
        opac: false,
        url: '',
        img: 'data:image/png;base64,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'
      },
      {
        text: '说明',
        opac: true,
        url: '../instructor/instructor?type=3d',
        img: 'data:image/png;base64,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'
      },
      {
        text: '留言',
        opac: true,
        url: '',
        ea:true,
        img:'data:image/png;base64,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'
      },
      {
        text: '皮肤',
        opac: false,
        url: '',
        img: 'data:image/png;base64,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'
      }
    ],
  },
  
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  server: function () {
    console.log(2);
 
},
  linkUrl: function (e) {
    wx.navigateTo({
      url: '../fc3dfilter/fc3dfilter?type=3d'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getPhone: function(e){
      console.log(e);
  },
  getUserInfo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})