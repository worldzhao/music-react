const Mock = require('mockjs');
const sleep = s => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, s * 1000);
  });
};

module.exports = {
  // mock basic get request
  'GET /api/user': Mock.mock({
    code: 0,
    msg: '',
    data: {
      'id|+1': 10,
      username: '@cname',
      male: '@boolean',
      'age|1': [18, 24, 8]
    }
  }),
  // mock basic post request
  'POST /api/user': Mock.mock({
    code: 0,
    msg: '',
    data: {
      'id|1': [1, 2, 3],
      username: '@cname',
      'sex|+1': 6
    }
  }),
  // mock advanced get rquest
  'GET /api/article/:articleId': (req, res) => {
    const { articleId } = req.params;
    return res.json(
      Mock.mock({
        code: 0,
        msg: '',
        data: {
          articleId: articleId,
          title: '文章标题',
          content: '@cparagraph'
        }
      })
    );
  },
  // mock advanced post request
  'POST /api/login/account': async (req, res) => {
    await sleep(3);
    const { password, username } = req.body;
    if (password === '888888' && username === 'admin') {
      return res.json({
        code: 0,
        msg: '',
        data: {
          id: 1,
          username: 'kenny',
          age: 6
        }
      });
    } else {
      return res.status(403).json({
        status: 'error',
        code: 403
      });
    }
  }
};
