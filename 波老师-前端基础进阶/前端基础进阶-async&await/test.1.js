/* 
一、如何在自己的开发环境中支持async/await语法
这里主要介绍两种方式。

1. webpack中支持该语法
首先在当前项目中使用npm下载babel-loader。

> npm install babel-loader --save-dev 
*/
// 然后在配置文件webpack.confing.dev.js中配置，在module.exports.module.rules中添加如下配置元素即可。

/* {
    test: /\.(js|jsx)$/,
    include: paths.appSrc,
    loader: require.resolve('babel-loader'),
    options: {
      cacheDirectory: true,
    },
  }, */
// 如果你使用最新版本的create-react-app或者vue-cli来构建你的代码，那么它们应该已经支持了该配置。

/* 
2. gulp中支持该语法
首先安装gulp插件

> npm install gulp-babel --save-dev
*/
// 然后编写任务 
var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('babel', function() {
  return gulp.src('src/app.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});