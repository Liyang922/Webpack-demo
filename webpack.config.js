const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // 开发模式
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  },
  devtool: 'inline-source-map', // 开发模式下，方便调试
  devServer: {
    static: './dist',
  },
  plugins: [
    // 生成一个新的index.html文件，自动引入打包后的js文件
    new HtmlWebpackPlugin({
      title: '开发模式',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 清理dist文件夹
    publicPath: '/', // 打包后的文件引用路径
  },
  // optimization: {
  //   runtimeChunk: 'single', // 因为配置了多个入口
  // },
  // 模块loader链式调用
  // module : {
  //   rules : [
  //     {
  //       test : /\.css$/i,
  //       // style-loader将所有的计算后的样式加入页面中
  //       // css-loader将css文件加入js文件中
  //       // 从右向左执行，顺序不能变
  //       use : [ 'style-loader', 'css-loader' ]
  //     },
  //     {
  //       test : /\.(png|svg|jpg|gif)$/i,
  //       // 不是use，而是type，利用webpack内置的Asset Modules
  //       type : 'asset/resource'
  //     },
  //   ]
  // }
};