const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    proxy('/api', {
      target: 'http://192.168.38.216:8001/',
      pathRewrite: {
        '^/api': ''
      },
      changeOrigin: true
    })
  );
};
