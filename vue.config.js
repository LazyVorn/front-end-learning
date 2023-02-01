//启动项目时自动打开浏览器的插件
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
//打包前自动清空dist目录的插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//端口号
const theDefaultPort = 2019;
const _baseUrl = process.env.NODE_ENV === 'production' ? './' : '/';
module.exports = {
    publicPath: _baseUrl,
    outputDir: 'dist/Frame',
    assetsDir: 'static',
    lintOnSave: false,
    chainWebpack: config => { },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 生产环境配置
            return {
                plugins: [
                    new CleanWebpackPlugin()
                ]
            }
        } else {
            // 开发环境配置
            return {
                plugins: [
                    new OpenBrowserPlugin({ url: 'http://localhost:' + theDefaultPort + '/index.html#/' })
                ],
            }
        }
    },
    productionSourceMap: false,
    css: {
        sourceMap: false,
        loaderOptions: {},
        requireModuleExtension: true
    },
    parallel: require('os').cpus().length > 1,
    pwa: {},
    devServer: {
        open: false,
        host: '0.0.0.0',
        port: theDefaultPort,
        https: false,
        hotOnly: false,
        proxy: {
            "/api": {
                target: "https://www.xxx.com",
                changeOrigin: true,
                secure: false
            }
        },
        before: app => { }
    },
    pluginOptions: {}
}