const { creatProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        creatProxyMiddleware({
            target: 'http://10.0.1.19:8080',
            // target: 'http://192.168.0.142:8080',
            changeOrigin: true,
        })
    );
};