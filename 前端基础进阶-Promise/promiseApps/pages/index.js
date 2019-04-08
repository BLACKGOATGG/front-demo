
// 在入口的index.js中，我们可以对常用的模块进行映射配置，这样在引入时就可以少写一些代码。
require.config({
    baseUrl: './',
    paths: {
        // 第三方库
        jquery:      "./lib/jquery-3.2.0",
        // html直接引入的js
        request:     './services/request',
        API:         './services/API',
        // 自定义的模块
        test:        './components/test',
        calendar:    './components/calendar',
        imageCenter: './components/imageCenter',
        dialog:      './components/Dialog',
        button:      './components/button',
    }
})

/* 
    配置之后，那么我们在其他模块中，引入配置过的模块，就可以简单的这样写：
    var $ = require('jquery');

    如果不进行配置，也可以这样引入模块：
    require('./components/button');

    我们可以使用define定义一个模块：
    // 其他方式请参阅文档
    define(function(require) {

    })

    使用return可以直接对外提供方法：
    // 在其他模块通过require引入时得到的值，就是这里返回的值
    define(function(require) {
        return {
            a: 1
        }
    }) 

    OK，了解上面这些，应付基础的使用已经没有问题了。
*/
// var $ = require(['./lib/jquery-3.2.0'],function(){
//     console.log("jq引入完成")
// });

require(['./pages/home'],function(){
    console.log(0)
})