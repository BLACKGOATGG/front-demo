define(function(require) {
    console.log(1)
    
    // 两种引入方法
    // var $ = require(['./lib/jquery-3.2.0'],function(){
    //     console.log("jq引入完成")
    // });
    // var $ = require("jquery")

    require('calendar');


    var imageWrapList = document.querySelectorAll('.img-center');
    var imageCenter = require('imageCenter');

    // 传入image的warp标签list，将其中的iamge标签设置为居中
    imageCenter(imageWrapList, 'wspectFill'); 


    require('button');
    // require('./components/button');



})

