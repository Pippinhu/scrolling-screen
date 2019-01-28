Page({
  data: {
    items: [
      { name: 'CHI', value: '#222324' },
      { name: 'CHN', value: '#FB5756', checked: 'true' },
      { name: 'BRA', value: '#2CC53A' },
      { name: 'JPN', value: '#6591F5' },
    ]
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  }
})
