const Mock = require('mockjs');

module.exports = {
  'GET /api/banner': Mock.mock({
    banners: [
      {
        imageUrl: 'http://p1.music.126.net/LQecAxwMKFjIbu5ScX1m9Q==/109951164287532536.jpg',
        targetId: 0,
        targetType: 3000,
        titleColor: 'blue',
        typeTitle: '数字专辑',
        url: 'https://music.163.com/store/newalbum/detail?id=80752440'
      },
      {
        imageUrl: 'http://p1.music.126.net/jLxoo76RFaBkgJ_nQCtjYw==/109951164288293582.jpg',
        targetId: 10883245,
        targetType: 1004,
        titleColor: 'red',
        typeTitle: '独家策划',
        url: null
      }
    ],
    code: 200
  })
};
