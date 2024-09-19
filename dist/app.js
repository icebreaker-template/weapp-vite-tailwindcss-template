App({
  onLaunch() {
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);
    wx.login({
      success: (res) => {
      }
    });
  },
  globalData: {
    userInfo: null
  }
});
