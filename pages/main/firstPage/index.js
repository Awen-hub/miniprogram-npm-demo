// pages/main/firstPage/index.js
Page({
    onTap(){
        wx.navigateTo({
          url: '/pages/subpackage-1/secondPage/index',
        })
    }
})